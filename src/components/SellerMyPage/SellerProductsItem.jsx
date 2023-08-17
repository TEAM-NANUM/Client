import React from 'react';
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';

const SellerProductsItem = ({item, sellerData, setProductID}) => {

    // console.log(item.product_id)
    const navigate = useNavigate();

    const list = {
        rating : item.ratingAvg,
        imgUrl : item.img_url,
        seller : sellerData.user_name,
        name : item.name,
        price : item.price,
        deliveryType : item.deliveryType
    }

    const onOrderState = () => {
        setProductID(item.product_id);
        navigate("/sellerProductsOrders");
    }

    return (
        <div onClick={onOrderState}>
            <Product list={list} />
        </div>
    );
};

export default SellerProductsItem;