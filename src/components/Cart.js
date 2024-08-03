import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
            <button className="m-2 p-2 bg-white text-green-500 border border-green-500 rounded-sm hover:bg-red-700 hover:text-white transition"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            <div>
                {cartItems.length===0 ? <h3>Your cart is empty. Please add items.</h3> : null}
            </div>
        </div>
    )
}

export default Cart;
