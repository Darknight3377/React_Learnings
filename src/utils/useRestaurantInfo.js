import React, { useEffect } from "react";

const useRestaurantInfo = (restaurantId) => {
  // custom hook to fetch restaurant info
  const [resInfo, setResInfo] = React.useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`,
    );
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantInfo;
