import React, { useRef, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../index.css";
import cards_data from "../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apidata, setapidata] = useState([])
  const cardsref = useRef();
  const url =
    `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: { accept: "application/json", Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMyZTYyNGQzZTBhZjU1ZmIxMDMyMzRlYTI1NzU1MyIsIm5iZiI6MTc4NTQ3Njg5MS4wNzYsInN1YiI6IjZhNmMzNzFiZjZhNjc5MDQ3MTRkZmUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zy07f23byeGdxHD-g4XvaYkEB7GONmEHB1rrOVfm83s ` },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setapidata(json.results))
      .catch((err) => console.error(err));
    cardsref.current.addEventListener("wheel", handleWheel);
  }, []);
  // console.log(apidata[0])
  function handleWheel(e) {
    e.preventDefault();
    cardsref.current.scrollLeft += event.deltaY;
  }
  return (
    <div className="mt-8 mb-8 text-white ">
      <h2 className="mb-2 text-4xl font-bold ">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        ref={cardsref}
        className="flex gap-2.5 overflow-x-scroll scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {apidata.map((card, index) => {
          return (
           
              <Link to={`/Player/${card.id}`} key={index} className="w-60 shrink-0 relative">
               <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt=""
                className="w-60 rounded-sm cursor-pointer"
              />
              <p className="absolute bottom-2 left-2 text-gray-300">
                {card.original_title}
              </p>
              </Link>
             
            
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
