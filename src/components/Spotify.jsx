import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Songlist from "./Songs";

const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_REACT_APP_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = import.meta.env.VITE_REACT_APP_SPOTIFY_RESPONSE_TYPE;

export default function Spotify() {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);

  const AUTH_SCOPES = 'user-modify-playback-state streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';
  

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setToken("");
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(AUTH_SCOPES)}`;
  };

  useEffect(() => {
    const searchAmorphisSongs = async (accessToken) => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: "artist:Amorphis",
            type: "track",
          },
        });

        setSongs(data.tracks.items);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          if (!accessToken) {
            window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(AUTH_SCOPES)}`;
          }
        } else {
          console.error("Error fetching Amorphis songs:", error);
        }
      }
    };

    const hash = window.location.hash;
    let accessToken = window.localStorage.getItem("token");

    if (!accessToken && hash) {
      const hashParams = new URLSearchParams(hash.substring(1));
      accessToken = hashParams.get("access_token");

      window.location.hash = "";

      if (accessToken) {
        window.localStorage.setItem("token", accessToken);
      }
    }

    setToken(accessToken);

    if (accessToken && !token) {
      searchAmorphisSongs(accessToken);
    }
  }, [token]);  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="motion"
    >
      <div className="text-vegasgold py-16 bg-gradient-to-r from-sky-800 to-sky-950 h-screen text-center">
        <h1 className="text-center pb-6">Amorphis Songs</h1>
        {!token ? (
          <a
            className="font-bold text-2xl border border-vegasgold p-4 rounded-lg hover:text-4xl hover:border-yellow-800"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(AUTH_SCOPES)}`}
          >
            Login to Spotify
          </a>
        ) : (
          <div>
          <h2 className="pb-4">Welcome to Amorphis Songs</h2>
          <button
          className="font-bold text-2xl border border-vegasgold p-2 rounded-lg hover:text-4xl hover:border-yellow-800"
          onClick={handleLogout}
        >
          Refresh
        </button>
        </div>
        )}
        <Songlist songs={songs} />
      </div>
    </motion.div>
  );
}
