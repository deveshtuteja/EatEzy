import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    //local state var->super powerful react var
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    //normal JS var
    // let listOfRes=[];
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4738044&lng=77.01067610000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        //Optional Chaining
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you're offline! Please check your internet connection</h1>;

    const { loggedInUser, setUserName } = useContext(UserContext);

    //Conditional Rendering 
    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex items-center">
                <div className="search my-4 mx-1 p-4">
                    <input type="text" className="border border-black" value={searchText} data-testid="searchBox" onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="m-4 px-4 py-1 bg-green-100 rounded-lg" onClick={() => {
                        console.log(searchText);
                        const filRes = listOfRes.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRes(filRes);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="my-4 mx-1 px-4 py-1 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filtList = listOfRes.filter((res) => res.info.avgRating > 4.5);
                            setFilteredRes(filtList);
                        }}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4">
                    <label>Username:</label>
                    <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="res-container flex flex-wrap justify-center gap-7 px-12">
                {filteredRes.map((restaurant) => (
                    <Link style={{ textDecoration: "none", color: "black" }} key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard resData={restaurant.info} /> </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;