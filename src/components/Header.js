import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between shadow-lg items-center">
            <div className="w-24">
                <img className="logo" alt="logo" src="https://res.cloudinary.com/dnnt3crp1/image/upload/v1775203926/christmas_2012_new_2857_gcmy8y.jpg" />
            </div>
            <div className="p-4 m-4">
                <ul className="flex gap-10">
                    <li>{onlineStatus ? "Online" + "🟢" : "Offline"+ "🔴"}</li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;