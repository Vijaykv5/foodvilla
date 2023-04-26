import React, { lazy , Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import Footer from "./components/Footer";
import Header,{Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/RestaurentMenu";
import Shimmer from "./components/shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//lazy Loading or Chuncking or Dynamic Import
const Instamart = lazy(()=> import("./components/Instamart"))
const AppLayout =()=>{
    return(
        <Provider id="flex-container" store={store} >
        <Header/>
        <Outlet/>     
        <Footer/>
        </Provider>
    )
}
//Router Path Configuration
const appRouter = createBrowserRouter([
    {
        path :"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children :[
            {
                path:"/about",
                element:<About/>,
               
            },
            {
                path:"/contact",
                element:<Contact/>,
               
            },
            {
                path:"/",
                element:<Body/>,
              
            },
            {
                path:"/restaurent/:id",
                element:<ResMenu/>

            },
            {
                path:"instamart",
                element:
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>

            },
            {
                path:"/cart",
                element:<Cart/>

            }
        ]

    },
    
    
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
