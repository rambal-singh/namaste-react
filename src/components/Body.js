import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

export const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filterRestraunt, seFilterRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5926321&lng=76.9985069&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5926321&lng=76.9985069&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      //optional chaining
      console.log(
        "p",
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestraunt(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      seFilterRestraunt( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return !listOfRestraunt || listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              //filter the resturant card and update the ui
              const filteredRestaurants = listOfRestraunt.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              seFilterRestraunt(filteredRestaurants);
            }}
          >
            search{" "}
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestraunt.filter(
                (res) => parseFloat(res.rating) > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filterRestraunt.map((restaurant) => (
       <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>  <RestaurantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
