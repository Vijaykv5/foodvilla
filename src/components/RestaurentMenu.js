import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../contants";

import useRestraunt from "../utils/useRestraunt";
import icon from "../assets/images/star_icon.png"
import { addItem , removeItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ShimmerMenu from "./ShimmerMenu";
const ResMenu=()=>{
    const params = useParams();
    const {id}=params;
   
   const restaurant = useRestraunt(id)
   const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;
  
   console.log(restaurantInfo);

   let result = [],uniqueFoodItems = [];
    const restaurantMenuInfo = restaurant?.cards; 

 const customFilter = (object, result) => {
   if (object.hasOwnProperty("itemCards")) result.push(object);

   for (var i = 0; i < Object.keys(object).length; i++) {
     if (typeof object[Object.keys(object)[i]] == "object") {
       customFilter(object[Object.keys(object)[i]], result);
     }
   }
 };
 
 const resMenu =
   restaurantMenuInfo?.length > 0 && customFilter(restaurantMenuInfo, result); //, "@type", "type.googleapis.com/swiggy.presentation.food.v2.Dish");
 if (result.length > 0) {
   const uniqueIds = [];
   let uniqueItems = [
     ...new Set(result.flatMap((f) => f.itemCards).map((p) => p.card.info)),
   ];
   uniqueFoodItems = uniqueItems?.filter((element) => {
     const isDuplicate = uniqueIds.includes(element.id);

     if (!isDuplicate) {
       uniqueIds.push(element.id);

       return true;
     }

     return false;
   });
 }
    const dispatch=useDispatch( )

    const addFoodItem=(item)=>{
        dispatch(addItem(item))
    }

    const  removeFoodItem=(item)=>{
        dispatch(removeItem(item))
    }
  
    return (!restaurant)?<ShimmerMenu/>:(
        <>
        {/* <div className=" Restaurent Info bg-black text-white font-nunito"> */}
        <div className="bg-black w-full h-96 text-white ">
        <h1 className="ml-[500px] text-4xl mt-24 absolute ">{restaurantInfo.name}</h1>
        <img  className="w-80 h-52 mt-20 ml-20 absolute rounded-sm "src={IMG_CDN_URL+ restaurantInfo.cloudinaryImageId}/>
         {/* {console.log(restaurant.cloudinaryImageId)}; */}
         <h2 className="absolute ml-[500] mt-36  ">{restaurantInfo.city}</h2>
         {console.log(restaurantInfo.avgRating)}
        {(restaurantInfo.avgRating>=4)? <div className="bg-green-500 rounded-sm text-justify  text-white flex  h-6 w-14 absolute mt-52 ml-[500px] "> <img className="h-6 w-6 p-1 " src={icon}></img>{restaurantInfo.avgRating}</div> :<div className="bg-orange-500 text-justify rounded-sm text-white flex  h-6 w-14 absolute mt-52 ml-[500px]"> <img className="h-6 w-6 p-1 " src={icon}></img>{restaurantInfo.avgRating}  </div>}
        <h2 className="absolute ml-[500] mt-64">{restaurantInfo.totalRatingsString}</h2>
        {/* <button className="bg-green-400 p-3 m-2 rounded-md " onClick={()=>handleAddItem()}>+</button> */}
       
        <h2 className=" absolute ml-[500] mt-72">{restaurantInfo?.feeDetails.message}</h2>
        </div>
        
        
       

        {/* Restaurant Menu */}
        <div className="Restaurent Menu grid justify-center m-auto max-w-[70%] p-4 ">
        <h1 className="font-bold  border-b pt-2 pb-2 m-auto  text-3xl">Menu</h1>
        <ul>
              {uniqueFoodItems.length > 0 ? (
                Object.values(uniqueFoodItems).map((item, index) => {
                  if (index < 20) {
                    return (
                      <li
                        className="grid lg:grid-cols-8 justify-center p-7 m-2 border-b sm:grid-cols-4"
                        key={index}
                      >
                        <>
                          <div className="lg:col-span-5">
                            <span className="font-bold">{item?.name}</span>
                            <br />
                            <span>
                              ₹ {(item?.price || item?.defaultPrice) / 100}
                            </span>
                            <br />
                            <span className="font-small mt-2 text-sm text-slate-500 font-sans hidden md:block">
                              {item?.description}
                            </span>
                          </div>
                          <div className="relative justify-self-end col-span-3">
                            {item?.imageId && (
                              <img
                                className="w-[118] rounded-md h-[96] object-cover"
                                src={IMG_CDN_URL + item?.imageId}
                                alt="item"
                              />
                            )}
                            <div className="text-center w-[118]  mt-1 border-2 rounded-md">
                              <button
                                className="text-gray-800 font-extrabold px-3"
                                onClick={() => {
                                  removeFoodItem();
                                }}
                              >
                                -
                              </button>
                              <button
                                className="text-green-800 font-bold px-2 m-1 text-sm border-x-2 align-middle"
                                disabled={true}>
                                {/* {
                                  cartItems.filter((f) => f.id === item.id)
                                    .length
                                } */}
                              </button>
                              <button
                                className="text-green-800 font-extrabold px-3" 
                                onClick={() =>  addFoodItem(item)}
                                
                                
                              >
                               
                                +
                              </button>
                            </div>
                          </div>
                        </>
                      </li>
                    );
                  }
                })
              ) : (
                <span>No restaurant menu items.</span>
              )}
            </ul>

        </div>
        </>
        
    )
}
export  default ResMenu;