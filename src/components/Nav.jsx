import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div class=" w-full bg-gradient-to-r from-sky-800 to-sky-950  py-4 drop-shadow-2xl font-mono">
      <div class="container flex align-center justify-around">
        <h3 class=" text-yellow-50 text-xl font-bold">Amorphis</h3>
        <ul class="flex gap-6">
          <li>
            <Link to="/" class="text-yellow-50">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Band" class="text-yellow-50">
              Band
            </Link>
          </li>
          <li>
            <Link to="/Albums" class="text-yellow-50">
              Albums
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
