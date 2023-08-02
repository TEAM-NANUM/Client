import React, { useState } from 'react';
import "../../styles/Category/CategoryItem.css"

const CategoryItem = ({category_id}) => {

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

    return (
        <div className='categoryItem_container'>
            {categoryItem.subcategories.map((item, idx) => 
                <div className='categoryItem'>
                    <span key={idx}>- {item.name}</span>
                </div>
            )}
        </div>
    );
};

export default CategoryItem;