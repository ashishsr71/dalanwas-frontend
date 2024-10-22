import { useEffect, useRef, useState } from "react";
import Cardv from "./Card";


const CardGrid = () => {
    const [selectedCandidates, setSelectedCandidates] = useState([]);
  const divRef=useRef(null);
  useEffect(()=>{
    if(divRef.current){
      divRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  },[])
    const handleSelect = (candidate) => {
      setSelectedCandidates((prevSelected) => {
        if (prevSelected.includes(candidate.name)) {
          return prevSelected.filter((name) => name !== candidate.name);
        } else {
          return [...prevSelected, candidate.name];
        }
      });
    };
  
    return (
      <div ref={divRef} className="container mx-auto p-4 mt-20">
        <h2 className="text-2xl font-semibold text-center mb-4">Selected Candidates: {selectedCandidates.join(", ")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,2,2,2,2,].map((candidate) => (
            <Cardv  />
          ))}
        </div>
      </div>
    );
  };


  export default CardGrid