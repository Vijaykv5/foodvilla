import {IMG_CDN_URL} from "../contants"
 

const Restocard=(props)=>{
    console.log(props);
    
    return(
        <div className="card">
            <img className="img-res" src={IMG_CDN_URL +props.restaurant.data?.cloudinaryImageId} ></img>
            <h2 className="name">{props.restaurant.data?.name}</h2>
            <h3 className="cuisenes">{props.restaurant.data?.cuisines.join(", ")}</h3>
            <h4 className="stars">{props.restaurant.data?.avgRating} Stars</h4>

        </div>
    )
}

export default Restocard;