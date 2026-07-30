import React, { useRef ,useEffect} from "react";
import "../index.css";
import cards_data from "../assets/cards/Cards_data";

const TitleCards = ({title,category}) => {
    const cardsref = useRef()
    
    useEffect(()=>{
        cardsref.current.addEventListener("wheel" ,handleWheel)
    },[])
 function handleWheel (e) {
    e.preventDefault()
    cardsref.current.scrollLeft += event.deltaY;
        
    }
  return (
    <div className="mt-8 mb-8 text-white ">
      <h2 className="mb-2 text-4xl font-bold ">{title ?title :"Popular on Netflix"}</h2>
      <div ref={cardsref} className="flex gap-2.5 overflow-x-scroll scrollbar-none [&::-webkit-scrollbar]:hidden">
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="w-60 shrink-0 relative" >
              <img src={card.image} alt="" className="w-60 rounded-sm cursor-pointer"/>
              <p className="absolute bottom-2 left-2 text-gray-300">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
