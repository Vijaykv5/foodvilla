import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
export const Title = ()=> {
    return (
        
        <a href="/">
        <img className="header-image" src={logo}></img>
        </a>
        
        );
};


const Header =()=>{
    
    useEffect(()=>{
        console.log("UseFffect");
    },[]);
   
    console.log("render")
    return (
    
    <div className="header">
        <Title/>
        <div className="nav-items">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li>
            </Link>
            <Link to="/contact" ><li>Contact</li></Link>
            <li>Cart </li>
        </ul>
        </div>
        
        
       
    </div>
    
    )  

}

export  default Header;