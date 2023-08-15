import React, { useEffect, useState } from 'react';
import "../../styles/Category/CategoryItem.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category_id, PROXY}) => {

    const navigate = useNavigate()

    const [categoryItem, setCategoryItem] = useState({    
        "subcategories": [
        {
          "id": 11,
          "name": "로딩중.."
        },
      ]
    })

    const onProductList = (e) => {
      navigate(`/search/${e.currentTarget.id}`)
    }

    useEffect(() =>{
      axios.get(`${PROXY}/api/categories/${category_id}/subcategories`)
      .then((res) => setCategoryItem(res.data))
      .catch((err) => console.log(err))
    }, [])
    

    return (
        <div className='categoryItem_container'>
            {categoryItem.subcategories.map((item, idx) => 
                <div className='categoryItem' key={idx}>
                    <span id={item.id} onClick={onProductList}>- {item.name}</span>
                </div>
            )}
        </div>
    );
};

export default CategoryItem;