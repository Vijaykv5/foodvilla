export const Title = ()=> {
    return (
        
        <a href="/">
        <img className="header-image" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"></img>
        </a>
        
        );
};

 
const Header =()=>{
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