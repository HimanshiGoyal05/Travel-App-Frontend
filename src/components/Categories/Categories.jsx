import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory, useFilter } from "../../context";

import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const {hotelCategory, setHotelCategory}= useCategory()
  const {filterDispatch}= useFilter();

  const handleShowMoreRightClick = () => {
    setNumberOfCategoryToShow((prev) => prev + 10);
  };

  const handleShowMoreLeftClick = () => {
    setNumberOfCategoryToShow((prev) => prev - 10);
  };

  const handleCategoryClick=(category)=>{
    setHotelCategory(category)
  }

  const handleFilterClick=()=>{
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    })
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://breeze-travel-planner-app.onrender.com/api/category",
        );
        const categoriesToShow = data.slice(
          numberOfCategoryToShow + 10 > data.length
            ? data.length - 10
            : numberOfCategoryToShow,
          numberOfCategoryToShow > data.length
            ? data.length
            : numberOfCategoryToShow + 10,
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoryToShow]);

  return (
    <section className="categories flex items-center gap-12 cursor-pointer justify-center">
      {numberOfCategoryToShow >= 10 && (
        <button
          className="fixed cursor-pointer btn-category btn-left"
          onClick={handleShowMoreLeftClick}
        >
          <span class="material-icons-outlined">chevron_left</span>
        </button>
      )}
      {categories &&
        categories.map(({ _id, category }) => (
          <span className={`${category === hotelCategory ? "border-bottom" : "" }`} key={_id} onClick={()=>handleCategoryClick(category)}>{category}</span>
        ))}
      {numberOfCategoryToShow - 10 < categories.length && (
        <button
          className="fixed cursor-pointer btn-category btn-right"
          onClick={handleShowMoreRightClick}
        >
          <span class="material-icons-outlined">chevron_right</span>
        </button>
      )}
      <button className="flex items-center gap-2 btn-filter fixed cursor-pointer" onClick={handleFilterClick}>
        <span className="material-icons-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </section>
  );
};
