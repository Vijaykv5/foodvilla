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
        const data = await fetch("`https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=${resId}");
        const json= await data.json();
  
        setRestaurant(json.data);
    }
    return(
        <>
        <h1>Restaurent ID : {id}</h1>
        <h1>Namaste </h1>
        <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId}/>
         {console.log(restaurant.cloudinaryImageId)};
        </>
    )
}
export  default ResMenu;