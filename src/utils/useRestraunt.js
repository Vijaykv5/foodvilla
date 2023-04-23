import { useState , useEffect} from "react";
const useRestraunt = (id)=>{
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

   

    const [restaurant,setRestaurant]=useState(null);
    // const[getRestaurantDetails,setGetRestaurantDetails]=useState(null)

    async function getRestaurantInfo(){
        
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId=${id}`);
        const json = await data.json();
        // console.log(json.data);
        
        
        // feeDetails.restaurantId
        setRestaurant(json.data);
    }
  
    
    return restaurant
    
}
export default useRestraunt;