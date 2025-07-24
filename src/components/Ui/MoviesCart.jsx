import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const MoviesCart = ({ movie }) => {

  if (!movie) return <h1>no movie found</h1>;
  
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)" }}
      className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-blue-800 flex flex-col h-full"
    >
      <img
        src={
          movie.Poster || "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="h-64 w-full object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-blue-400 mb-2 truncate">
          {movie.Title}
        </h3>
        <div className="text-gray-400 text-xs mt-auto">
          Year: {movie.Year|| "N/A"}
        </div>
        <NavLink to={`/movies/${movie.imdbID}`}>
<button className="w-full text-white  p-2 rounded-xl mt-2 bg-blue-600 cursor-pointer "> Watch Now</button>
        </NavLink>
        
      </div>
    </motion.div>
  );
};

export default MoviesCart;
