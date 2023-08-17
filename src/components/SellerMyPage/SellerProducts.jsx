import axios from 'axios';
import React, { useEffect } from 'react';
import SellerProductsItem from './SellerProductsItem';

const SellerProducts = ({sellerProduct, sellerData, setProductID}) => {

    // 주문 조회에 들어갈 통신
    // 나중에 가져다 쓸 것
    // useEffect(() => {
    //     axios.get(`${PROXY}/api/seller/6`, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //         }
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
    // }, [])


    return (
        <div className='SellerProducts_container'>
            <div>나의 상품 목록 ({sellerProduct.count})</div>
            {sellerProduct && sellerProduct.products.map((item, idx) => <SellerProductsItem key={idx} item={item} sellerData={sellerData} setProductID={setProductID} />)}
        </div>
    );
};

export default SellerProducts;