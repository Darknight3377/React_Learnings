import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo.js";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const restaurantId = useParams().id;
  const resInfo = useRestaurantInfo(restaurantId);
 
  if(!resInfo) return <Shimmer />;
  const itemCards = (resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Menu</h1>
      <ul>
        {
          itemCards?.map((item) => (
            <li key={item.card.info.id}>
                <h3>{item.card.info.name}</h3>
                <h4>{item.card.info.price / 100} Rs</h4>
                <p>{item.card.info.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
