import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
export const Title = ()=> {
    return (
        
        <a href="/">
        <img className="h-16 ml-4 sm:items-center  pt-2" src={logo}></img>
        </a>
        
        );
};


const Header =()=>{
    
    useEffect(()=>{
        console.log("UseFffect");
    },[]);
   
    console.log("render")
    return (
    
    <div className="flex justify-between bg-white shadow-xl sticky top-0 z-50 " >
        <Title/>
        <div className="nav-items">
        <ul className="flex p-7">
            <Link to="/"><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">Home</li></Link>
            <Link to="/about"><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">About</li></Link>
            <Link to="/contact" ><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">Contact</li></Link>
            <Link to="/instamart" ><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">Instamart</li></Link>
            
            <li>Cart </li>
        </ul>
        </div>
        
        
       
    </div>
    
    )  

}

export  default Header;