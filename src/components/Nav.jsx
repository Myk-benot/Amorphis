import React from "react";
import { Link } from "react-router-dom";
import { GiCompass } from "react-icons/gi";

export default function Nav() {
  return (
    <div class=" w-full bg-gradient-to-r from-sky-800 to-sky-950  py-4 drop-shadow-2xl font-mono">
      <div class="container flex align-center justify-around">
        <GiCompass class="text-3xl text-yellow-50" />
        <ul class="flex gap-6">
          <li>
            <Link
              to="/"
              class="text-yellow-50 border p-2 rounded-md hover:border-slate-900 hover:font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Band"
              class="text-yellow-50 border p-2 rounded-md hover:border-slate-900 hover:font-bold"
            >
              Band
            </Link>
          </li>
          <li>
            <Link
              to="/Albums"
              class="text-yellow-50 border p-2 rounded-md hover:border-slate-900 hover:font-bold"
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              to="/Spotify"
              class="text-yellow-50 border p-2 rounded-md hover:border-slate-900 hover:font-bold"
            >
              Spotify
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
