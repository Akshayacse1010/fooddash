import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const handleFilter = () => {
    const filteredItem = listOfRestaurants.filter(
      (resData) => resData.info.avgRating > 4
    );
    setlistOfRestaurants(filteredItem);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1241778&lng=80.14948729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json.data.cards[5].card);
    setlistOfRestaurants(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering down
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
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
