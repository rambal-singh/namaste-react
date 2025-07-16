import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  // console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json(); // Await here!
      setResInfo(json); // Set the actual JSON response
      console.log("Fetched Data:", json); // Log here, not resInfo
    } catch (error) {
      console.error("Failed to fetch menu", error);
    }
  };

  if (resInfo === null) return <Shimmer />;
  // Use optional chaining to safely access nested properties
  const text = resInfo?.data?.cards?.[0]?.card?.card?.text;
  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const ItemCard =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card;

  return (
    <div className="menu">
      <h1>{text}</h1>
      <p>
        {restaurantInfo?.cuisines?.join(", ")}-
        {restaurantInfo?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {ItemCard?.carousel?.map((item, index) => (
          <li key={index}>
            {item?.dish?.info?.name}-{item?.dish?.info?.finalPrice / 100}RS
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
