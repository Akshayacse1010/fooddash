import { IMG_URL } from '../utils/constants';
const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_URL + cloudinaryImageId} alt=" logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
