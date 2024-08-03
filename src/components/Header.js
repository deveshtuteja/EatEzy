import { LOGO_URL } from "../utils/constants";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);


    //Selector(HOOK)->Subscribing to the store

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg"> 
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="font-bold px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;