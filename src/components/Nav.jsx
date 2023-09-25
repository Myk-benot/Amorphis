import React from "react";
import { Link } from "react-router-dom";
import { GiCompass } from "react-icons/gi";

export default function Nav() {
  return (
    <div className=" w-full bg-gradient-to-r from-sky-800 to-sky-950  py-4  font-mono text-vegasgold drop-shadow-xl ">
      <div className="container flex align-center justify-around">
        <GiCompass className="text-3xl text-vegasgold" />
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold hover:border-b-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Band"
              className="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold"
            >
              Band
            </Link>
          </li>
          <li>
            <Link
              to="/Albums"
              className="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold"
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              to="/Spotify"
              className="border border-vegasgold p-2 rounded-md hover:border-yellow-800 hover:font-bold"
            >
              Spotify
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
