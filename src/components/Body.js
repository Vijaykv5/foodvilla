import { useState ,useEffect } from "react";
import {restodata} from "../contants";
import Restocard from "./Restocard";


function filterData(searchtext,restraurants){
   const filterData= restraurants.filter((restaurant)=>restaurant.data.name.includes(searchtext)
   );
   return filterData;

}


const Body =()=>{
    const[restraurants,setRestraurants]=useState(restodata);
    const [searchtext,setSearchText]=useState("");

    //How to use use effect
    useEffect(()=>{

       getRestaurants();
    },[]);

    async function getRestaurants(){
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(data)
        //optional chaining 
        setRestraurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return(
        <>
        <div className="search-container">
            <input type="text"className="search-input"placeholder="Search" 
            value={searchtext}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }
            }/>
            <button className="search-btn"
            onClick={()=>{
               const data= filterData(searchtext,restraurants);
               setRestraurants(data);
            }}
            
            >Search </button>
        </div>
        
        <div className="body-cards">
            <Restocard restaurant={restodata[0]}/>
            <Restocard restaurant={restodata[1]}/>
            <Restocard restaurant={restodata[2]}/>
            <Restocard restaurant={restodata[3]}/>
            <Restocard restaurant={restodata[4]}/>
            <Restocard restaurant={restodata[5]}/> 
              
        </div>
        </>

    )
} 

export default Body;