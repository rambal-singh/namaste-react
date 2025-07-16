import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
