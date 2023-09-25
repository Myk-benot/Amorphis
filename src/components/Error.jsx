import React from "react";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div class="text-vegasgold text-center pt-16 h-screen bg-gradient-to-r from-sky-800 to-sky-950 leading-8">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <a href="/" class=" border border-vegasgold p-2 hover:font-bold">
          Go to the home page
        </a>
      </div>
    </motion.div>
  );
}
