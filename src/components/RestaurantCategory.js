import React from "react";

const RestaurantCategory = ({ group, cardOpen, setShowIndex }) => {
  const handleOpen = () => {
    setShowIndex();
  };

  return (
    <div key={group?.card?.card?.title} className="mb-4">
      <div
        className="flex flex-wrap justify-between items-center p-2 mb-2 bg-gray-200 rounded-lg"
        onClick={handleOpen}
      >
        <div className="">
          <h2 className="text-lg font-bold mb-2">
            {group?.card?.card?.title} ({group?.card?.card?.itemCards.length})
          </h2>
        </div>
        <div>⬇️</div>
      </div>
      {cardOpen &&
        group?.card?.card?.itemCards.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 mb-2 bg-gray-100 rounded-lg"
          >
            <h3 className="font-bold text-md py-2 ">
              {item?.card?.info?.name}
            </h3>
            <h4>{item?.card?.info?.description}</h4>
            <h4>₹ {item?.card?.info?.price / 100}</h4>
          </div>
        ))}
    </div>
  );
};

export default RestaurantCategory;
