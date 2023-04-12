import {IMG_CDN_URL} from "../contants"
import icon from "../assets/images/star_icon.png";
 

const Restocard=(props)=>{
    console.log(props);

    //  console.log(props.restaurant.data?.ribbon);
    const rating =props.restaurant.data?.avgRating;
    const Discount =props.restaurant.data?.aggregatedDiscountInfo?.header;
   
   
    
    
    return(
        
        <div className="card w-72 border-slate-300 p-5 ml-8 hover:shadow-2xl  ">
           
           <div className="bg-red-800 text-right absolute  items-center flex   mb-5 ml-48  text-blue-50">
           {Discount?<h3 className="name p-2 font-semibold text-center text-sm  ">{props.restaurant.data?.aggregatedDiscountInfo?.header}</h3>:<div></div>}
           </div>
            
            
            <img className="img-res rounded-sm" src={IMG_CDN_URL +props.restaurant.data?.cloudinaryImageId} ></img>
            <h2 className="name p-2 font-bold text-xl  font-poppins">{props.restaurant.data?.name}</h2>
            <h3 className="cuisenes font-extralight text-sm">{props.restaurant.data?.cuisines.join(", ")}</h3>
        <div className=" flex">
        { (rating>=4)? <div className="bg-green-500 rounded-sm text-justify  text-white flex mt-3 h-6 w-14"> <img className="h-6 w-6 p-1 " src={icon}></img>{rating}</div> :<div className="bg-orange-500 text-justify rounded-sm text-white flex mt-3 h-6 w-14"> <img className="h-6 w-6 p-1 " src={icon}></img>{rating}  </div>}
            <h3 className="name p-2 font-extralight  text-sm  pt-3 pl-20">{props.restaurant.data?.costForTwoString}</h3>
        </div>
        
            
            
        </div>
    )
}

export default Restocard;