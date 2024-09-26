import React, { useEffect, useState } from "react";
import axios from "axios";

const GetMoviePictures = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/movie/getmovie"
      );
      if (Array.isArray(response.data)) {
        setMovies(response.data);
      } else if (Array.isArray(response.data.data)) {
        setMovies(response.data.data);
      } else {
        console.error("Unexpected response data format", response.data);
      }
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  return (
    <div className="py-4 px-8">
  

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <img
              src={`http://localhost:5000/${movie.image}`}
              alt={`Movie ${index}`}
              className="h-48 w-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">{movie.title}hibye</h2>
              <p className="text-gray-500">{movie.description}byeee</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMoviePictures;
