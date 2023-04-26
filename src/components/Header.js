import { useEffect, useState ,useContext} from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";

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

    const cartItems = useSelector(store =>store.cart.items);
   
    
    return (

    
    <div className="flex justify-between bg-white shadow-xl sticky top-0 z-50" >
        <Title/>
        <div className="nav-items">
        <ul className="flex p-7">
            <Link to="/"><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">Home</li></Link>
            <Link to="/about"><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">About</li></Link>
            <Link to="/contact" ><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">Contact</li></Link>
            <Link to="/instamart" ><li className="px-4 font-poppins font-bold hover:text-orange-400 hover:border-b-2 hover:border-orange-400 transition-all duration-200">Instamart</li></Link>
            
            <Link to="/cart">
            <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                <a href="#" role="button" className="relative flex">
                <svg className="flex-1 mb-4 mr-2 w-8  h-8 fill-current" viewBox="0 0 24 24">
                 <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                 </svg>
                <span className="absolute right-0 top-0 rounded-full bg-orange-400 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartItems.length}
                </span>
                </a>
            </li>
            </Link>
            
        </ul>
        </div>
        
        
       
    </div>
    
    )  

}

export  default Header;