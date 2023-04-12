import { Link } from "react-router-dom";
const Footer =()=>{
    return(
        <div className="h-24 bg-black">
            <h2 className="text-cyan-50 text-center font-poppins font-semibold pt-9">Created By Vijay KV © 2023 <Link to="/">FoodVilla</Link></h2>
        </div>

    )
} 
export default Footer;