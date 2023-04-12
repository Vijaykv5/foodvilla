import { useState, useEffect } from "react";
import Restocard from "./Restocard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
  const[allRestraunts,setAllRestraunts]=useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchtext, setSearchText] = useState("");
  //console.log(restraurants);
  //How to use use effect
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    //optional chaining
    setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraurants(json?.data?.cards[2]?.data?.data?.cards);(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline=useOnline();
  if(!isOnline){
    return <h1>Check your internet connection </h1>
  } 
  //Not rendering anything...
  
  if (!filteredRestraurants ) {
    return <p>No restaurants found.</p>;
  } 

  //return is rendering JSX
  return (allRestraunts.length===0)?<Shimmer/>:(
    <>
      <div className="search-container p-5 my-9 text-center">
        <input 
        
          type="text"
          className="search-input w-96 p-3 font-poppins  focus:outline-orange-300 "

          
          placeholder= " Search a restaurent you want..."
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
     
        <button
          className="search-btn font-poppins bg-orange-400 text-white hover:bg-black p-3 rounded-e-lg"
          onClick={() => {
            const data = filterData(searchtext, allRestraunts);
            setFilteredRestraurants(data);
          }}
        >
          Search{""}
        </button>
      </div>
      
      
     
      <div className="body-cards flex flex-wrap ml-5">
        {console.log(filteredRestraurants)}
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