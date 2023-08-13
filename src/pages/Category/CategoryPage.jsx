import React, { useEffect, useState } from 'react';
import "../../styles/Category/CategoryPage.css"
import SubHeader from '../../components/SubHeader';
import CategoryList from '../../components/Category/CategoryList';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const CategoryPage = ({PROXY}) => {

  const [category, setCategory] = useState({
    "categories": []
  })

  useEffect(() => {
    axios.get(`${PROXY}/api/categories`)
    .then((res) => setCategory(res.data))
    .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <SubHeader page="카테고리" />
      <div className='category_container'>
        {category.categories.map((list, idx) => <CategoryList PROXY={PROXY} list={list} key={idx} />)}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;