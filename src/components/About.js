import { Link } from "react-router-dom";
import Image from "../assets/images/about_us.png"
const About=()=>{
    return(
        <div className="">
            <div className="flex justify-between items-center">
            <h1 className="text-gray-700 font-semibold px-16 text-6xl text-left mb-32 ">  A Journey <br /> Through the World of<br />{" "}</h1>
            <div className="items-start">
            <div className="  mt-96  rounded-lg bg-orange-400 text-amber-100 font-semibold px-4 text-6xl     py-3"> Culinary Delights </div>
            </div>
            {/* <span>Culinary Delights</span> */}
            <img  className="text-gray-700 font-semibold p-10 text-6xl  text-left" src={Image}  ></img>
            
            </div>
            
           
            
           
        </div>
    )

}
export default About;