import { React, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { clearCart } from "../utils/cartSlice";

import { IMG_CDN_URL } from "../contants";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();
 
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("foodItems")));
  // }, []);

  // console.log("as", cart);

  let uniqueFoodItems = [];
  if (cartItems.length > 0) {
    let uniqueItems = [...new Set(cartItems)];
    uniqueFoodItems = uniqueItems.map((value) => [
      value,
      cartItems.filter((str) => str === value).length,
    ]);
  }
  const total =
    cartItems.length > 0
      ? cartItems
          .map((x) => (x.price > 0 ? x.price / 100 : x.defaultPrice / 100))
          .reduce((sum, a) => sum + a, 0)
      : 0;

  const final = total + 49 + 29;

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  };
  const placeOrder = () => {
    dispatch(clearCart());
    
  };

  return (
    <>
   
      {cartItems?.length > 0 && (
        <div className="mt-9 text-center text-4xl font-bold">
          <h3 className="fw-bolder">Cart Items- {cartItems.length}</h3>
        </div>
      )}

      {cartItems?.length == 0 && (
        <div className="mt-4 text-center">
          <h1 className="font-bold text-2xl mt-16">Cart Empty</h1>
          <h2 className=" font-semibold text-2xl mt-24">
            You can go to{" "}
            <a href="/" className="font-bold hover:text-orange-400 ">
              Home Page
            </a>{" "}
            to view more restaurants.
          </h2>
        </div>
      )}
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-items-list">
            {Object.values(uniqueFoodItems).map((item, index) => {
              return (
                <div>
                  <li type="none" key={index}>
                    <div className="menu-item">
                      <div className="menu-item-details ">
                        <h3 className="item-title ml-72 font-semibold mt-20 ">
                          {item[0].name} - [{item[1]}]
                        </h3>
                        <p className="item-cost ml-72 mt-3 text-sm">
                          ₹ {(item[0]?.price || item[0]?.defaultPrice) / 100}
                        </p>
                        <p className="item-desc w-96 ml-72 mt-3  text-sm hidden md:block ">
                          {item[0]?.description}
                        </p>
                      </div>
                      <div className="menu-img-wrapper absolute ml-[1000] -mt-28">
                        {item[0]?.imageId && (
                          <img
                            className="w-[118]   rounded-md h-[96] object-cover"
                            src={IMG_CDN_URL + item[0]?.imageId}
                            alt="item"
                          />
                        )}
                        
                      </div>
                    </div>
                  </li>
                  <hr className=" ml-60 w-[900] h-[1.5] mt-4 bg-gray-300"/>
                </div>
                
              );
            })}
          </div>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <>
         
          <div className="restaurant-menu-content">
            <div className="price-items-container">
              <div className=" ">
                <h1 className="text-center font-semibold mt-5 ">Price Breakup</h1>
                
                <div className="">
                  <div className="items-start text-start mt-6 mb-2 ml-72 ">
                    <div className="">
                      <label className=" ">Item Total :</label>
                      {`₹${total}`}
                    </div>
                    <label>Taxes : ₹49</label>
                    <div>
                      <label>Delivery Charges : ₹29</label>
                    </div>
                  </div>
                  <hr />
                  <div className="font-bold mt-2 ml-72">Total Amount :- ₹{final}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        [null]
      )}

      {cartItems?.length > 0 && (
        <div className="grid">
          <button
            className="p-2 mt-2 col-span-1 justify-self-center hover:bg-green-100 bg-green-400 rounded-md"
            onClick={() => {
              handleClearCart();
            }}
            disabled={!cartItems.length}
          >
            Clear Cart
          </button>
          <button
            className="col-span-1 justify-self-center border rounded-lg m-2 bg-orange-200 p-2"
            onClick={() => {
              placeOrder();
            }}
            disabled={!cartItems.length}
          >
            Place Order
          </button>
        </div>
      )}
     
     
    </>
  );
}

export default Cart;