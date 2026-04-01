const RestaurantCards = ({resData}) => {
    return (
        <div className="res-cards">
            <img src={null} alt="res-logo" className="res-logo"/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.costForTwo} for TWO</h4>
            <h4>{resData.info.avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCards;