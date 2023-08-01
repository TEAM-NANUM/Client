import React, { useEffect, useState } from 'react';
import "../../styles/Category/CategoryPage.css"
import SubHeader from '../../components/SubHeader';
import CategoryList from '../../components/Category/CategoryList';

const CategoryPage = () => {

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
          // ... 추가적인 1차 카테고리 정보 ...
        ]
      })

    return (
        <>
            <SubHeader page="카테고리" />
            <div className='category_container'>
                {category.categories.map((list, idx) => <CategoryList list={list} key={idx} />)}
            </div>
        </>
    );
};

export default CategoryPage;