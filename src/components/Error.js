import image from "../assets/images/error.png"
import {useRouteError} from "react-router-dom"
const Error=()=>{
    const err=useRouteError();
   
    return(

    <div>
        
        <img className="error-image" src={image}></img>
        <h1>OOOPS.....!</h1>
        <h1>{err.status+ " : "+err.statusText} </h1>
    </div>
    )
}
export default Error;