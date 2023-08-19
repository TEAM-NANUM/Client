import React, { useEffect, useState } from "react";
import "../../styles/Category/CategoryItem.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category_name, category_id, PROXY }) => {
  const navigate = useNavigate();

  const [categoryItem, setCategoryItem] = useState({
    subcategories: [
      {
        id: 11,
        name: "로딩중..",
      },
    ],
  });

  console.log(categoryItem);

  const onProductListSub = (e) => {
    navigate(
      `/search?subcategory=${e.currentTarget.id}&name=${encodeURIComponent(
        e.currentTarget.className
      )}`
    );
  };

  const onProductListCategory = (e) => {
    navigate(
      `/search?category=${e.currentTarget.id}&name=${encodeURIComponent(
        e.currentTarget.className
      )}`
    );
  };

  useEffect(() => {
    axios
      .get(`${PROXY}/api/categories/${category_id}/subcategories`)
      .then((res) => setCategoryItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(categoryItem)
  // console.log(encodeURIComponent("닭/오리/양")) => 닭%2F오리%2F양
  // console.log(decodeURIComponent("닭%2F오리%2F양")) => 닭/오리/양

  return (
    <div className="categoryItem_container">
      <div className="categoryItem">
        <span
          className={category_name}
          id={category_id}
          onClick={onProductListCategory}
        >
          - 전체
        </span>
      </div>
      {categoryItem.subcategories.map((item, idx) => (
        <div className="categoryItem">
          <span className={item.name} id={item.id} onClick={onProductListSub}>
            - {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
