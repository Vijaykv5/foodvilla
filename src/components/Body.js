import { useState, useEffect } from "react";
import Restocard from "./Restocard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


function filterData(searchtext, restraurants) {
  const filterData = restraurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
  );
  return filterData;
}

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
  //Not rendering anything...
  if(!allRestraunts) return null;

  

  //return is rendering JSX
  return (allRestraunts.length===0)?<Shimmer/>:(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchtext, allRestraunts);
            setFilteredRestraurants(data);
          }}
        >
          Search{""}
        </button>
      </div>

      <div className="body-cards">
      
        {filteredRestraurants.map((restraurants) => (
          
          <Link to={"/restaurent/"+restraurants.data.id}   key={restraurants.data.id}>
            <Restocard  restaurant={restraurants} />
            {console.log(restraurants)}
            </Link>
            
        ))}
      </div>
    </>
  );
};

export default Body;