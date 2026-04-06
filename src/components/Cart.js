import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
  return (
    <>
      {
        cartItems.length === 0 ? (
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
        ) : (
            <div>
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <button className="bg-gray-500 text-white p-2 rounded" onClick={()=> dispatch(clearCart())}>
                    Clear Cart
                </button>
                {cartItems.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 mb-2 bg-gray-100 rounded-lg flex justify-between items-center">
                        <div>
                        <h3 className="font-bold text-md py-2 ">
                            {item?.card?.info?.name}
                        </h3>
                        <h4>{item?.card?.info?.description}</h4>
                        <h4>₹ {item?.card?.info?.price / 100}</h4>
                        </div>
                        <div>
                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=> dispatch(removeItem(item?.card?.info))}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        )
      }
    </>
  );
};

export default Cart;
