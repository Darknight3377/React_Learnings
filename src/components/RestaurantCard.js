const RestaurantCards = ({resData}) => {
    return (
        <div className="res-cards">
            <img src={null} alt="res-logo" className="res-logo"/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(',')}</h4>
            <h4>{resData.costForTwo} for TWO</h4>
            <h4>{resData.avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCards;