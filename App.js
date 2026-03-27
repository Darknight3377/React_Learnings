import React from "react";
import ReactDOM from "react-dom/client";


const resData = [
    {
        "id": 1234,
        "name": "Meghana Foods",
        "cuisines": ["Biryani", "North Indian", "Chinese"],
        "costForTwo": 400,
        "avgRating": 3.8
    },
    {
        "id": 1235,
        "name": "KFC",
        "cuisines": ["Burger", "Sandwiches", "Cold drinks"],
        "costForTwo": 600,
        "avgRating": 3.9
    },
    {
        "id": 1236,
        "name": "Dominos",
        "cuisines": ["Pizza", "Wraps", "Burgers"],
        "costForTwo": 700,
        "avgRating": 4.2
    },
];

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src="https://www.freepik.com/free-photos-vectors/menu-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                {resData.map((rest) => (
                    <RestaurantCards key={rest.id} resData={rest}/>
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);