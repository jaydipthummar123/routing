import React from "react";
import { useLoaderData } from "react-router-dom";
import MoviesCart from "../components/Ui/MoviesCart";
import { motion } from "framer-motion";
import Loader from "../components/Ui/Loader";

const Movies = () => {
  const movies = useLoaderData();


  if (!movies) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-white text-xl">
        <Loader />
      </div>
    );
  }

  if (Array.isArray(movies) && movies.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-white text-xl">
        No movies found.
      </div>
    );
  }

  return (
    <main className="min-h-[70vh] px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-blue-300 mb-8 text-center"
      >
        Movies Gallery
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {movies?.Search?.map((movie, idx) => (
          <MoviesCart key={movie.imdbID || idx} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
