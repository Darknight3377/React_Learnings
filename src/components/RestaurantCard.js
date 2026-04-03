import { Link } from "react-router-dom";

const RestaurantCards = ({ resData, imgUrl }) => {
    console.log(resData);
    return (
        <div className="p-4 w-72 bg-gray-100 rounded-lg">
            <img src={imgUrl} alt="res-logo" className="w-full h-48 object-cover"/>
            <h3 className="font-bold text-lg py-2 "><Link to={`/restaurant/${resData.info.id}`}>{resData.info.name}</Link></h3>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating+ "⭐"} </h4>
        </div>
    )
}

export default RestaurantCards;