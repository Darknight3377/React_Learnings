import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body resData={resData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);