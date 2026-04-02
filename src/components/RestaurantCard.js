import { Link } from "react-router-dom";

const RestaurantCards = ({resData}) => {
    return (
        <div className="res-cards">
            <img src={null} alt="res-logo" className="res-logo"/>
            <h3><Link to={`/restaurant/${resData.info.id}`}>{resData.info.name}</Link></h3>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.costForTwo} for TWO</h4>
            <h4>{resData.info.avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCards;