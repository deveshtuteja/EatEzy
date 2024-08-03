import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { ITEM_URL } from "../utils/constants";
import { useState } from "react";

const ItemList = ({ items }) => {
    const [activeItemId, setActiveItemId] = useState(null);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItems(item));

        // Set the active item ID and reset after a delay
        setActiveItemId(item.card.info.id);
        setTimeout(() => {
            setActiveItemId(null);
        }, 500); // Adjust the duration (in milliseconds) as needed
    };

    return (
        <div>
            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className={`m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between items-center ${activeItemId === item.card.info.id ? 'bg-green-500' : ''}`}
                >
                    <div className="w-9/12">
                        <div className="py-2 font-semibold">
                            <span>{item.card.info.name}</span>
                            <span>- ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 flex flex-col items-center">
                        <img
                            src={ITEM_URL + item.card.info.imageId}
                            className="w-24 h-24 object-cover rounded-md mb-2"
                        />
                        <button
                            className="p-2 bg-white text-green-500 border border-green-500 rounded-sm hover:bg-green-500 hover:text-white transition"
                            onClick={() => handleAddItem(item)}
                        >
                            Add+
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
