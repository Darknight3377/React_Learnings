import RestaurantCards from "./RestaurantCard";
import { useState } from "react";

const Body = ({resData}) => {

    const [resList, setResList] = useState(resData);
    const handleFilter = () => {
        const filteredData = resData.filter((res) => res.avgRating > 4);
        setResList(filteredData);
        console.log(filteredData);
    }

    return (
        <div className="body">
            <div className="filter-btn-container">
                <button className="filter-btn" onClick={handleFilter}>Filter top rated restaurants</button>
            </div>
            <div className="res-container">
                {resList.map((rest) => (
                    <RestaurantCards key={rest.id} resData={rest}/>
                ))}
            </div>
        </div>
    )
}

export default Body;