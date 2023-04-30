import { useState, useEffect } from "react";
import Restocard from "./Restocard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { RESTAURANT_API } from "../contants";
import { restaurantData } from "../api";



const Body = () => {
  const[allRestraunts,setAllRestraunts]=useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchtext, setSearchText] = useState("");
  //console.log(restraurants);
  //How to use use effect
 
  

  async function getRestaurants() {
    //handling CORS error using try catch
    try{
    const data = await fetch(RESTAURANT_API)
    const json = await data.json();
    
    // ?.data?.cards[2]?.data?.data?.cards
    //optional chaining
    setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
        getRestaurants();
    }, 0);
  },[]);
  
  const isOnline=useOnline();
  if(!isOnline){
    return <h1>Check your internet connection </h1>
  } 
  //Not rendering anything...
  
  // if (!filteredRestraurants ) {
  //   return <p>No restaurants found.</p>;
  // } 
  


  
  //return is rendering JSX
  return (allRestraunts.length===0)?<Shimmer/>:(
    <>
    {(filteredRestraurants.length==0)?<div className="font-bold text-3xl text-center mt-28">No Restaurant Found!</div>:
      <div className="search-container p-5 my-9 text-center">
        <input         
          type="text"
          className="search-input w-96 p-3 font-poppins  focus:outline-orange-300 border-solid border-2 border-gray-200 rounded-l-md"
          placeholder= " Search a restaurent you want..."
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        
     
        <button
          className="search-btn font-poppins bg-orange-400 text-white hover:bg-black p-3.5 rounded-e-lg"
          onClick={() => {
            const data = filterData(searchtext, allRestraunts);
            setFilteredRestraurants(data);
          }}
        >
         
          Search{""}
        </button>
        
  

      </div>
      
        }
     
      <div className="body-cards flex justify-center flex-wrap  mb-24">
        
        {filteredRestraurants.map((restraurants) => (
          
          <Link to={"/restaurent/"+restraurants.data.id}   key={restraurants.data.id}>
            <Restocard  restaurant={restraurants} />
            
            </Link>
            

        ))}
      </div>
      
    </>
  );
};

export default Body;