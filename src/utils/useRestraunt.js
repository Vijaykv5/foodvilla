import { useState , useEffect} from "react";
const useRestraunt = (id)=>{
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    const [restaurant,setRestaurant]=useState(null);

    async function getRestaurantInfo(){
        
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.957813344607038&lng=76.24363493174314&restaurantId=${id}&submitAction=ENTER`);
        const json = await data.json();
        console.log(json.data);
        
        // feeDetails.restaurantId
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
    }
    
    return restaurant
    
}
export default useRestraunt;