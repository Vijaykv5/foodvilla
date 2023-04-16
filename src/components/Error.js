import image from "../assets/images/error.png"
import {Link, useRouteError} from "react-router-dom"
const Error=()=>{
    const err=useRouteError();
   
    return(

    <div>
        
        <div className="flex justify-center">
        <img className="error-image " src={image}></img>
        </div>
        <h1 className="text-center font-extrabold  text-5xl" >Ooops! Something Went Wrong </h1>
        <h1 className=" mt-4 text-center font-semibold  text-5xl"> {err.data}  </h1>
        <div className="flex justify-center mt-4">
        <Link to="/"><button className="text-white bg-orange-400 p-3 font-serif rounded-md hover:bg-black">Back Home</button></Link>
        </div>
    </div>
    )
}
export default Error;