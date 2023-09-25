import React from "react";
import { motion } from "framer-motion";

export default function Albums() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="motion"
    >
      <div className="text-vegasgold font-mono bg-bg-amorphis h-full  bg-gradient-to-r from-sky-800 to-sky-950 mx-auto">
        <img
          src="../src/images/Amorphis_logo.png"
          alt="amorphis"
          className="mx-auto pt-16"
        ></img>
        <h1 className="text-center py-16 text-2xl">Albums</h1>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto py-8 text-lg leading-10">
          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              The Karelian Isthmus
              <br />
              Released: 1 November 1992
              <br />
              Label: Relapse
              <br />
              <a
                href="https://en.wikipedia.org/wiki/The_Karelian_Isthmus"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Tales from the Thousand Lakes
              <br />
              Released: 12 July 1994
              <br />
              Label: Relapse Records
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Tales_from_the_Thousand_Lakes"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Elegy
              <br />
              Released: 14 May 1996
              <br />
              Label: Relapse
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Elegy_(Amorphis_album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Tuonela
              <br />
              Released: 29 March 1999
              <br />
              Label: Relapse
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Tuonela_(album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Am Universum
              <br />
              Released: 3 April 2001
              <br />
              Label: Relapse
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Am_Universum"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Far from the Sun
              <br />
              Released: 26 May 2003
              <br />
              Label: Virgin, EMI
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Far_from_the_Sun"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Eclipse
              <br />
              Released: 15 February 2006
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Eclipse_(Amorphis_album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Silent Waters
              <br />
              Released: 29 August 2007
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Silent_Waters_(Amorphis_album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Skyforger
              <br />
              Released: 27 May 2009
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Skyforger_(album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              The Beginning of Times
              <br />
              Released: 25 May 2011
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/The_Beginning_of_Times"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Circle
              <br />
              Released: 19 April 2013
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Circle_(Amorphis_album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Under the Red Cloud
              <br />
              Released: 4 September 2015
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Under_the_Red_Cloud"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Queen of Time
              <br />
              Released: 18 May 2018
              <br />
              Label: Nuclear Blast
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Queen_of_Time"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Halo
              <br />
              Released: 11 February 2022
              <br />
              Label: Atomic Fire
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Halo_(Amorphis_album)"
                target="_blank"
                className="border p-2 rounded-md bg-goldrod text-black hover:bg-vegasgold hover:border-yellow-800"
              >
                More Info
              </a>
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Privilege of Evil
              <br />
              Released: 5 December 1993
              <br />
              Label: Relapse
              <br />
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              Black Winter Day
              <br />
              Released: 31 January 1995
              <br />
              Label: Relapse
              <br />
            </p>
          </div>

          <div className="border border-vegasgold p-2 rounded-lg shadow shadow-goldrod">
            <p>
              My Kantele
              <br />
              Released: 27 May 1997
              <br />
              Label: Relapse
              <br />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
