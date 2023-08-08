import React, { useEffect, useState } from 'react';
import "../../styles/Category/CategoryPage.css"
import SubHeader from '../../components/SubHeader';
import CategoryList from '../../components/Category/CategoryList';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const CategoryPage = ({PROXY}) => {

  const [category, setCategory] = useState({
    "categories": [
      {
        "id": 1,
        "name": "제철 과일"
      },
      {
        "id": 2,
        "name": "농산물"
      },
      // .... 추가적인 1차 카테고리 정보 ....
    ]
  })

  useEffect(() => {
    axios.get(`${PROXY}/api/categories`)
    .then((res) => console.log(res))
    // .then((res) => setCategory(res))
    .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <SubHeader page="카테고리" />
      <div className='category_container'>
        {category.categories.map((list, idx) => <CategoryList list={list} key={idx} />)}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;