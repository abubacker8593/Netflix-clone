import React, { useEffect, useState } from "react";
import "../index.css";
import back from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
function Player() {
  const { id } = useParams();
  let navigate = useNavigate()
  const [apidata,setapidata] = useState({
    name : "", 
    key : "",
    typeof : "",
    published_at : ""
  })
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: { accept: "application/json", Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMyZTYyNGQzZTBhZjU1ZmIxMDMyMzRlYTI1NzU1MyIsIm5iZiI6MTc4NTQ3Njg5MS4wNzYsInN1YiI6IjZhNmMzNzFiZjZhNjc5MDQ3MTRkZmUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zy07f23byeGdxHD-g4XvaYkEB7GONmEHB1rrOVfm83s" },
  };

  useEffect(() => {
    fetch(url, options)
    .then((res) => res.json())
    .then((json) => setapidata(json.results[0]))
    .catch((err) => console.error(err))
  },[]);
  ;


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative cursor-pointer ">
      <img src={back} alt="" className="absolute top-5 left-5  size-12" onClick={()=>{navigate(-2)}} />
      <iframe
        src={`https://www.youtube.com/embed/${apidata.key}`}
        width="90%"
        height="90%"
        title="Trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded-sm"
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apidata.published_at.split("T")[0]}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
}

export default Player;
