import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);
    const onlineStatus = useOnlineStatus();
    const imageUrls = [
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883615/samples/food/fish-vegetables.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883614/samples/food/dessert.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883615/samples/food/pot-mussels.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883622/samples/breakfast.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883624/samples/dessert-on-a-plate.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883624/samples/coffee.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1729883625/cld-sample-4.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1775203615/pexels-bi-ravencrow-2154273033-36065964_fp3snu.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1775203617/foodiesfeed.com_juicy-cheeseburger_evcfen.jpg",
        "https://res.cloudinary.com/dnnt3crp1/image/upload/v1775203617/pexels-peep-this-photo-1766934996-31846711_mydcmz.jpg"
    ]
    useEffect(()=> {
        fetchData();
    },[]) // called after first render, empty dependency array means it will run only once, if we have any state variable in the dependency array then it will run when that state variable changes
    // console.log("component rendered"); //called first

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        setResList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json);
    } 

    const handleFilter = () => {
        const filteredData = resList.filter((res) => res.info.avgRating > 4.5);
        setFilteredResList(filteredData);
        // console.log(filteredData);
    }

    const handleSearch = () => {
        const searchData = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredResList(searchData);
        // console.log(searchData);
    }

    if(!onlineStatus) return <h1>Offline, please check your internet connection</h1>

    return filteredResList.length === 0 ? <Shimmer /> : (
        <div className="mt-4 mb-4">
            <div className="seaarch-container flex gap-2 mb-4">
                <input type="text" className="p-2 border border-gray-300 rounded" placeholder="Search for restaurant" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSearch}>Search</button>
            </div>
            <div className="filter-btn-container">
                <button className="bg-green-500 text-white p-2 rounded" onClick={handleFilter}>Filter top rated restaurants</button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
                {filteredResList.map((rest) => (
                    <RestaurantCards key={rest.info.id} resData={rest} imgUrl={imageUrls[Math.floor(Math.random() * imageUrls.length)]} />
                ))}
            </div>
        </div>
    )
}

export default Body;