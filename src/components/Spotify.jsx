import React, { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_REACT_APP_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = import.meta.env.VITE_REACT_APP_SPOTIFY_RESPONSE_TYPE;

console.log("CLIENT_ID:", CLIENT_ID);
console.log("REDIRECT_URI:", REDIRECT_URI);
console.log("AUTH_ENDPOINT:", AUTH_ENDPOINT);
console.log("RESPONSE_TYPE:", RESPONSE_TYPE);

export default function Spotify() {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    const searchAmorphisSongs = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: "Amorphis",
          type: "track",
        },
      });

      setSongs(data.tracks.items);
    };

    if (token) {
      searchAmorphisSongs();
    }
  }, [token]);

  const renderSongs = () => {
    return songs.map((song) => (
      <div
        class="bg-gradient-to-r from-sky-800 to-sky-950 font-mono p-2 shadow shadow-yellow-50 rounded-lg mx-auto leading-8"
        key={song.id}
      >
        <img class="rounded" src={song.album.images[0].url} alt="Album Cover" />
        <p>
          <strong>Song Name:</strong> {song.name}
        </p>
        <p>
          <strong>Album:</strong> {song.album.name}
        </p>
        <p>
          <strong>Artist:</strong>{" "}
          {song.artists.map((artist) => artist.name).join(", ")}
        </p>
        <p>
          <strong>Popularity:</strong> {song.popularity}
        </p>
        {song.preview_url && (
          <audio controls>
            <source src={song.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
        <hr />
      </div>
    ));
  };
  return (
    <div class=" text-yellow-50 py-16 bg-gradient-to-r from-sky-800 to-sky-950 h-screen text-center">
      <h1 class="text-center pb-6">Amorphis Songs</h1>
      {!token ? (
        <a
          class="font-bold text-2xl border p-4 rounded-lg hover:text-4xl hover:border-yellow-800"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <h2>Welcome to Amorphis Songs</h2>
      )}
      <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 px-2 bg-gradient-to-r from-sky-800 to-sky-950">
        {songs.length > 0 && renderSongs()}
      </div>
    </div>
  );
}
