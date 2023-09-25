import React from "react";
import { motion } from "framer-motion";
import {
  SiFacebook,
  SiInstagram,
  SiSpotify,
  SiTwitter,
  SiWikipedia,
  SiGooglehome,
} from "react-icons/si";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="motion"
    >
      <section className=" h-full bg-gradient-to-r from-sky-800 to-sky-950 font-mono text-lg">
        <div className="py-16 md:flex md:items-center md: justify-center ">
          <img
            className="mb-8 md:w-1/2 lg:w-1/2"
            src="../src/images/amorphis-icon.png"
            alt="amorphis"
          ></img>
          <p className=" w-3/4 md:w-1/2 px-4 mx-auto text-vegasgold">
            Amorphis is a Finnish heavy metal band founded by Jan Rechberger,
            Tomi Koivusaari, and Esa Holopainen in 1990. Initially, the band was
            a death metal act, but on later albums they evolved into playing
            other genres, including progressive metal, and folk metal. They
            frequently use the Kalevala, the epic poem of Finland, as a source
            for their lyrics
          </p>
        </div>
        <div className="py-16 md:flex  md:items-center md:justify-center">
          <div className="w-1/2 mx-auto">
            <img
              className="w-96 mx-auto"
              src="../src/images/amorphis-queen-of-time.png"
              alt="amorphis"
            />
          </div>
          <p className=" w-3/4 md:w-1/2 px-4 mx-auto my-8 text-vegasgold">
            The band, hailing from Helsinki, Finland, has established itself as
            a versatile force in the realm of metal music since their formation
            in 1990. Their sound is a unique fusion of progressive metal,
            melodic death metal, folk metal, power metal, and elements of
            death-doom in their earlier years. Over their extensive and ongoing
            career, they've been associated with several labels including
            Virgin, EMI, Relapse, Nuclear Blast, Mojo, Mystic, Victor (JVC),
            Spinefarm, and Atomic Fire, showcasing their significant presence
            and influence in the metal scene.
          </p>
        </div>
        <div className="py-16 ">
          <img
            className="mx-auto shadow-2xl rounded-lg px-2"
            src="../src/images/amorphis-header.jpg"
            alt="amorphis"
          />
        </div>
        <div className=" text-5xl grid grid-cols-3 justify-items-center lg:grid-cols-6 gap-4 py-16 text-vegasgold">
          <a href="https://amorphis.net/" target="_blank">
            <SiGooglehome className="hover:text-goldrod" />
          </a>
          <a href="https://www.facebook.com/amorphis" target="_blank">
            <SiFacebook className="hover:text-goldrod" />
          </a>
          <a href="https://www.instagram.com/amorphisband/" target="_blank">
            <SiInstagram className="hover:text-goldrod" />
          </a>
          <a href="https://en.wikipedia.org/wiki/Amorphis" target="_blank">
            <SiWikipedia className="hover:text-goldrod" />
          </a>
          <a
            href="https://open.spotify.com/artist/2UOVgpgiNTC6KK0vSC77aD"
            target="_blank"
          >
            <SiSpotify className="hover:text-goldrod" />
          </a>
          <a href="https://twitter.com/amorphis" target="_blank">
            <SiTwitter className="hover:text-goldrod" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
