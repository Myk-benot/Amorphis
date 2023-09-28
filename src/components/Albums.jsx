import React from "react";
import { motion } from "framer-motion";
import albums from "./Album-info.jsx"; 

export default function Albums() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="motion min-h-screen bg-gradient-to-r from-sky-800 to-sky-950 font-mono text-vegasgold"
    >
      <img className="py-12 mx-auto" src="/amorphis-logo.png"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {albums.map((album, index) => (
          <div key={index} className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod leading-8 h-48">
            <p>
              {album.title}
              <br />
              Released: {album.released}
              <br />
              Label: {album.label}
              <br />
              {album.moreInfoLink && (
                <a
                  href={album.moreInfoLink}
                  target="_blank"
                  className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800 mt-auto"
                >
                  More Info
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}


     