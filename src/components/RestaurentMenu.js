import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../contants";

const ResMenu=()=>{
    const params = useParams();
    const {id}=params;
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    const [restaurant,setRestaurant]=useState({});

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.957813344607038&lng=76.24363493174314&restaurantId=382363&submitAction=ENTER");
        const json= await data.json();
        console.log(json.data?.cards[0]?.card.card?.info?.groupedCard);
       
        setRestaurant(json.data?.cards[0]?.card.card?.info);
    }
    return(
        <>
        
        <h1>Restaurent ID : {id}</h1>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId}/>
         {console.log(restaurant.cloudinaryImageId)};
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.costForTwo}</h2>
        <h2>{restaurant.avgRating}Stars</h2>

        </>
        
    )
}
export  default ResMenu;