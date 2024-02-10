import { Link } from "react-router-dom";
import React from "react";
const Footer =()=>{
    const copyright_year = new Date().getFullYear();
    return (
      <div className="footer h-20  bg-black    ">
        <h2 className="text-cyan-50 text-center font-poppins font-semibold p-6 inset-x-0 bottom-0">
          <Link to="https://www.linkedin.com/in/vijaykv555/">
            Created By Vijay KV ©{copyright_year} FoodVilla
          </Link>
        </h2>
      </div>
    );
} 
export default Footer;