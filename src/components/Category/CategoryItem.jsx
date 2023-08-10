import React, { useEffect, useState } from 'react';
import "../../styles/Category/CategoryItem.css"
import axios from 'axios';

const CategoryItem = ({category_id, PROXY}) => {

    const [categoryItem, setCategoryItem] = useState({    
        "subcategories": [
        {
          "id": 11,
          "name": "2차 카테고리 A-1"
        },
        {
          "id": 12,
          "name": "2차 카테고리 A-2"
        },
        {
          "id": 13,
          "name": "2차 카테고리 A-3"
        }
      ]
    })

    useEffect(() =>{
      axios.get(`${PROXY}/api/categories/${category_id}/subcategories`)
      .then((res) => setCategoryItem(res.data))
      .catch((err) => console.log(err))
    }, [])
    

    return (
        <div className='categoryItem_container'>
            {categoryItem.subcategories.map((item, idx) => 
                <div className='categoryItem' key={idx}>
                    <span>- {item.name}</span>
                </div>
            )}
        </div>
    );
};

export default CategoryItem;