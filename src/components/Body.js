import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard"; 
import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer";


const Body = () => {

   //local state variable

   const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant, setFilteredRestraunt] = useState([]);

   const [searchText, setSearchText] = useState("");

   useEffect(()=>{
      fetchData();
   },[])

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       
      const json = await data.json()

      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     //optional chaining
      setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    } 

    return listOfRestaurants.length === 0 ? (
       <Shimmer/>
    ) : ( 
      <div className="body">
        <div className="search-filter-container">
            <div className="search">
              <input type="text" className="search-box" value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}/>
              <button className="search-btn"
              onClick={() =>{
                // console.log(listOfRestaurants);

              const filteredRestaurant = listOfRestaurants.filter(
                  (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
              
                setFilteredRestraunt(filteredRestaurant)
                
              }}>
                search
              </button>
              
            </div>
            <div className="filter">
              <div className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestraunt(filteredList);
              }}>Top Rated Restaurants</div>
            </div>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurants) => (
            <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
          ))}             
        </div>
      </div>
    )
  }

  export default Body;