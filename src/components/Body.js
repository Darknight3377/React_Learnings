import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);
    useEffect(()=> {
        fetchData();
    },[]) // called after first render, empty dependency array means it will run only once, if we have any state variable in the dependency array then it will run when that state variable changes
    console.log("component rendered"); //called first

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        setResList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    } 

    const handleFilter = () => {
        const filteredData = resList.filter((res) => res.info.avgRating > 4.5);
        setResList(filteredData);
        console.log(filteredData);
    }

    const handleSearch = () => {
        const searchData = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredResList(searchData);
        console.log(searchData);
    }

    return filteredResList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="seaarch-container">
                <input type="text" className="search" placeholder="Search for restaurant" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
            <div className="filter-btn-container">
                <button className="filter-btn" onClick={handleFilter}>Filter top rated restaurants</button>
            </div>
            <div className="res-container">
                {filteredResList.map((rest) => (
                    <RestaurantCards key={rest.info.id} resData={rest}/>
                ))}
            </div>
        </div>
    )
}

export default Body;