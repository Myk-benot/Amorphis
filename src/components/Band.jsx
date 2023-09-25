import React from "react";
import { motion } from "framer-motion";

export default function Band() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="motion"
    >
      <section className=" min-h-screen bg-gradient-to-r from-sky-800 to-sky-950 font-mono text-vegasgold">
        <img
          className="py-8 mx-auto"
          src="../src/images/amorphis-logo.png"
        />
        <div className="py-8 grid grid-cols-3">
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
        </div>
        <h3 className="p-8 text-center text-2xl font-bold">Present Members:</h3>
        <div className="flex py-12">
          <ul className=" mx-auto text-xl p-4 leading-8">
            <li>
              <a
                className="hover:text-slate-900 hover:font-bold"
                href="https://en.wikipedia.org/wiki/Esa_Holopainen"
                target="_blank"
              >
                Esa Holopainen – lead guitar (1990–present)
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-900 hover:font-bold"
                href="https://en.wikipedia.org/wiki/Tomi_Koivusaari"
                target="_blank"
              >
                Tomi Koivusaari – rhythm guitar, backing vocals (1990–present),
                harsh vocals (1990-1998)
              </a>
            </li>
            <li>
              Jan Rechberger – drums (1990–1996, 2002–present), studio keyboards
              (1990–1993)
            </li>
            <li>
              <a
                className="hover:text-slate-900 hover:font-bold"
                href="https://en.wikipedia.org/wiki/Olli-Pekka_Laine"
                target="_blank"
              >
                Olli-Pekka Laine – bass guitar, backing vocals (1990–2000,
                2017–present)
              </a>
            </li>
            <li>Santeri Kallio – keyboards (1998–present)</li>
            <li>
              <a
                className="hover:text-slate-900 hover:font-bold"
                href="https://en.wikipedia.org/wiki/Tomi_Joutsen"
                target="_blank"
              >
                Tomi Joutsen – lead vocals (2005–present)
              </a>
            </li>
          </ul>
        </div>
        <div className="py-8 grid grid-cols-3">
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
        </div>
        <h3 className="p-8 text-center  text-2xl font-bold">Past Members:</h3>
        <div className="flex py-12">
          <ul className=" mx-auto text-xl p-4  leading-8">
            <li>Niclas Etelävuori (2000–2017)</li>
            <li>Pekka Kasari (1996–2002)</li>
            <li>Kasper Mårtenson (1993–1996)</li>
            <li>Kim Rantala (1996–1998)</li>
            <li>Janne Puurtinen (1998)</li>
            <li>Ville Tuomi (1994–1995, 2010)</li>
            <li>Marko Waara (1995)</li>
            <li>Pasi Koskinen (1995–2004)</li>
            <li>Juha-Pekka Leppäluoto (2004)</li>
            <li>Jukka Routila – live session backing vocals (2012–2013)</li>
            <li>Sakari Kukko – live session saxophone and flute (2012–2014)</li>
          </ul>
        </div>
        <div className="py-8 grid grid-cols-3">
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
          <img
            className=" w-96 mx-auto p-4"
            src="../src/images/trans-anchor.png"
          />
        </div>
      </section>
    </motion.div>
  );
}
