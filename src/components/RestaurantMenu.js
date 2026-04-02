import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const restaurantId = useParams().id;
  const [menu, setMenu] = React.useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`,
    );
    const json = await data.json();
    console.log(json);
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  };

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Menu</h1>
      <ul>
        {menu &&
          Object.values(menu).map((item) => (
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
