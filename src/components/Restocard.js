import {IMG_CDN_URL} from "../contants"
 

const Restocard=(props)=>{
    //console.log(props);
    
    return(
        <div className="card">
            <img className="img-res" src={IMG_CDN_URL +props.restaurant.data?.cloudinaryImageId} ></img>
            <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
            <h4>{props.restaurant.data?.deliveryTime} Stars</h4>

        </div>
    )
}

export default Restocard;