import React, { useState } from "react";
import "../../styles/Category/CategoryList.css";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ list, PROXY }) => {
  const [currentView, setCurrentView] = useState("");
  const [currentViewState, setCurrentViewState] = useState(true);

  const onViewToggle = (e) => {
    if (currentView !== e.currentTarget.id) {
      setCurrentView(e.currentTarget.id);
    } else {
      setCurrentViewState((idx) => !idx);
    }
  };

  return (
    <div className="categoryList_container">
      <div className="categoryList_title" id={list.name} onClick={onViewToggle}>
        <div className="categoryList_name_icon">
          <div style={{ width: "24px", height: "24px", overflow: "hidden" }}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src={`./img/imgCategory/${list.name}.png`}
              alt="icon"
            />
          </div>
          <p id="categoryList_name">{list.name}</p>
        </div>
        <div className="categoryList_viewBtn">
          <img
            src={`./img/imgCategory/${
              currentViewState && currentView === list.name
                ? "viewOpen"
                : "viewClose"
            }.svg`}
            alt="view"
          />
        </div>
      </div>
      <div className="categoryList_content">
        {currentViewState && currentView === list.name ? (
          <CategoryItem
            PROXY={PROXY}
            category_name={list.name}
            category_id={list.id}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CategoryList;
