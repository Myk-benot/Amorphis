import React from "react";

export default function Nav() {
  return (
    <div class=" w-full bg-gradient-to-r from-sky-800 to-sky-950  py-4 drop-shadow-2xl font-mono">
      <div class="container flex align-center justify-around">
        <h3 class=" text-yellow-50 text-xl font-bold">Amorphis</h3>
        <ul class="flex gap-6">
          <li>
            <a class="text-yellow-50" href="Home">
              Home
            </a>
          </li>
          <li>
            <a class="text-yellow-50" href="band">
              Band
            </a>
          </li>
          <li>
            <a class="text-yellow-50" href="albums">
              Albums
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
