import resObj from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resObj);

  const handleFilter = () => {
    const filteredItem = listOfRestaurants.filter(
      (resData) => resData.info.avgRating > 4
    );
    setlistOfRestaurants(filteredItem);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          filter button
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
