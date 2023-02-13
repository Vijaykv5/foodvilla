import { useState, useEffect } from "react";
import Restocard from "./Restocard";

function filterData(searchtext, restraurants) {
  const filterData = restraurants.filter((restaurant) =>
    restaurant.data.name.includes(searchtext)
  );
  return filterData;
}

const Body = () => {
  const [restraurants, setRestraurants] = useState([]);
  const [searchtext, setSearchText] = useState("");

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
    setRestraurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return (
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
            const data = filterData(searchtext, restraurants);
            setRestraurants(data);
          }}
        >
          Search{" "}
        </button>
      </div>

      <div className="body-cards">
        {restraurants.map((restraurants) => (
          <Restocard key={restraurants.id} restaurant={restraurants} />
        ))}
      </div>
    </>
  );
};

export default Body;