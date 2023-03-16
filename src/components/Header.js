import { useEffect, useState } from "react";
export const Title = ()=> {
    return (
        
        <a href="/">
        <img className="header-image" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"></img>
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart </li>
        </ul>
        </div>
        
        
       
    </div>
    
    )  

}

export  default Header;