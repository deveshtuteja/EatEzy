import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{showList ? '⬆️' : '⬇️'}</span>
                </div>
                <div>
                    {showList && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;
