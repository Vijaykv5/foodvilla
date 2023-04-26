
import { useSelector } from "react-redux";
    
const Cart =() => {
    const cartItems=useSelector((store)=>store.cart.items)
    return(
        <div>
            <h1 className="p-5 font-bold text-3xl">Cart-{cartItems.length}</h1>
            {console.log(cartItems)}
        </div>
    );
}

export default  Cart;