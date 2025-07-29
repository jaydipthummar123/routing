import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

const MoviesDetails = () => {
  const movieDetail = useLoaderData();

  return (
    <div className="flex flex-col md:flex-row items-center  justify-center min-h-screen  p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={movieDetail.Poster}
          alt={movieDetail.Title}
          className="rounded-lg shadow-lg w-64 h-auto object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8"
      >
        <h1 className="text-3xl font-bold text-gray-100 mb-2">
          {movieDetail.Title}
        </h1>
        <p className="text-gray-300 mb-1">
          <span className="font-semibold">Year:</span> {movieDetail.Year}
        </p>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {},
          }}
          className="space-y-2 mt-4"
        >
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Actors:</span> {movieDetail.Actors}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Director:</span>{" "}
            {movieDetail.Director}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Writer:</span> {movieDetail.Writer}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Genre:</span> {movieDetail.Genre}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Language:</span>{" "}
            {movieDetail.Language}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Country:</span>{" "}
            {movieDetail.Country}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Released:</span>{" "}
            {movieDetail.Released}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Runtime:</span>{" "}
            {movieDetail.Runtime}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Rated:</span> {movieDetail.Rated}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Awards:</span> {movieDetail.Awards}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Box Office:</span>{" "}
            {movieDetail.BoxOffice}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">DVD:</span> {movieDetail.DVD}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Production:</span>{" "}
            {movieDetail.Production}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Metascore:</span>{" "}
            {movieDetail.Metascore}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">IMDB Rating:</span>{" "}
            {movieDetail.imdbRating} ({movieDetail.imdbVotes} votes)
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">IMDB ID:</span> {movieDetail.imdbID}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Type:</span> {movieDetail.Type}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Website:</span>{" "}
            {movieDetail.Website}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-gray-300"
          >
            <span className="font-semibold">Response:</span>{" "}
            {movieDetail.Response}
          </motion.li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Plot</h2>
          <p className="text-gray-400">{movieDetail.Plot}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default MoviesDetails;
