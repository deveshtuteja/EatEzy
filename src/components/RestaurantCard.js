import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime } = {},
  } = resData || {};

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card m-4 p-4 h-[420px] w-[300px] flex flex-col items-center text-center rounded-lg bg-gray-100 hover:bg-gray-200 hover:w-[310px] hover:h-[410px]" data-testid="resCard">
      <img
        className="res-logo rounded-lg h-44 w-full object-fill"
        alt={name}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User - {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;

