import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Songlist from "./Songs"

const CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_REACT_APP_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = import.meta.env.VITE_REACT_APP_SPOTIFY_RESPONSE_TYPE;

export default function Spotify() {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);
  const AUTH_SCOPES = 'playlist-read-private';
 

 

  useEffect(() => {
    const hash = window.location.hash;
    let accessToken = window.localStorage.getItem("token");

    if (!accessToken && hash) {
      accessToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", accessToken);
    }

    setToken(accessToken);

    const refreshAccessToken = async () => {
      const refreshToken = window.localStorage.getItem("refresh_token");

      if (!refreshToken) {
        console.error("No refresh token available.");
        return;
      }

      try {
        const response = await axios.get(`/refresh_token?refresh_token=${refreshToken}`);
        const newAccessToken = response.data.access_token;
        window.localStorage.setItem("token", newAccessToken);
        setToken(newAccessToken);
      } catch (error) {
        console.error("Error refreshing access token:", error);
      }
    };

    const searchAmorphisSongs = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: "Amorphis",
            type: "track",
          },
        });

        setSongs(data.tracks.items);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Access token expired, refresh it
          refreshAccessToken();
         
        } else {
          console.error("Error fetching Amorphis songs:", error);
        }
      }
    };

    if (accessToken) {
      searchAmorphisSongs();
    }
  }, [token]);

  const redirectToSpotifyLogin = () => {
    const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(AUTH_SCOPES)}`;
    window.location.href = AUTH_URL;
  }
  

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="motion"
    >
      <div className=" text-vegasgold py-16 bg-gradient-to-r from-sky-800 to-sky-950 h-screen text-center">
        <h1 className="text-center pb-6">Amorphis Songs</h1>
        <button onClick={redirectToSpotifyLogin}>
          Re-Authorize with Spotify
          </button>

        {!token ? (
          <a
            className="font-bold text-2xl border border-vegasgold p-4 rounded-lg hover:text-4xl hover:border-yellow-800"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(AUTH_SCOPES)}`}
          >
            Login to Spotify
          </a>
        ) : (
          <h2>Welcome to Amorphis Songs</h2>
        )}
         <Songlist songs={songs}/>
        </div>
    </motion.div>
  );
}