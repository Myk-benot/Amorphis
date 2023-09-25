import React from "react";
import { Link } from "react-router-dom";
import { GiCompass } from "react-icons/gi";

export default function Nav() {
  return (
    <div className=" w-full bg-gradient-to-r from-sky-800 to-sky-950  py-4  font-mono text-vegasgold drop-shadow-xl ">
      <div class="container flex align-center justify-around">
        <GiCompass class="text-3xl text-vegasgold" />
        <ul class="flex gap-6">
          <li>
            <Link
              to="/"
              class="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold hover:border-b-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Band"
              class="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold"
            >
              Band
            </Link>
          </li>
          <li>
            <Link
              to="/Albums"
              class="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold"
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              to="/Spotify"
              class="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold"
            >
              Spotify
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
