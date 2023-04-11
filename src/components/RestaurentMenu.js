import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./shimmer";
import useRestraunt from "../utils/useRestraunt";

const ResMenu=()=>{
    const params = useParams();
    const {id}=params;
   
   const restaurant = useRestraunt(id)
    return (!restaurant)?<Shimmer/>:(
        <>
        
        <h1>Restaurent ID : {id}</h1>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId}/>
         {/* {console.log(restaurant.cloudinaryImageId)}; */}
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.costForTwo}</h2>
        <h2>{restaurant.avgRating}Stars</h2>

        </>
        
    )
}
export  default ResMenu;