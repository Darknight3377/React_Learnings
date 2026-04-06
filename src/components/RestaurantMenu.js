import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo.js";
import Shimmer from "./Shimmer.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const restaurantId = useParams().id;
  const resInfo = useRestaurantInfo(restaurantId);
  const [showIndex, setShowIndex] = React.useState(0);

  if (!resInfo) return <Shimmer />;
  const cardGroups =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  // console.log(cardGroups);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Restaurant Menu</h1>
      <div>
        {cardGroups.map((group, index) => (
          <RestaurantCategory key={group?.card?.card?.title} group={group} 
            cardOpen={index === showIndex}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
