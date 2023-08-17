import React, { useState } from 'react';
import SubHeader from '../../components/SubHeader';
import MainImg from '../../components/SellerProductAdd/MainImg';
import ProductName from '../../components/SellerProductAdd/ProductName';
import Price from '../../components/SellerProductAdd/Price';
import Unit from '../../components/SellerProductAdd/Unit';
import Contents from '../../components/SellerProductAdd/Contents';
import DeliveryType from '../../components/SellerProductAdd/DeliveryType';
import "../../styles/SellerProductAdd/SellerProductAdd.css"
import Category from '../../components/SellerProductAdd/Category';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerProductAddPage = ({PROXY, htmlContent}) => {

    const navigate = useNavigate()

    const [mainImg, setMainImg] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [unit, setUnit] = useState("");
    const [category, setCategory] = useState("");
    const [delivery, setDelivery] = useState("DIRECT");

    const [productForm, setProductForm] = useState(
        {
            "name": "example",
            "subcategory_id": 1,
            "img_url": "string",
            "description": "김치 예시 jh",
            "price": 1000,
            "unit": 10,
            "delivery_type": "PACKAGE"
          }
    );

    const onProductAdd = () => {
        axios.post(`${PROXY}/api/seller/product`, productForm, {
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then((res) => alert("상품 등록을 성공했습니다!"))
        .then((res) => navigate("/sellerMyPage"))
        .catch((err) => alert("상품 등록을 실패했습니다. 상품 정보를 다시 한 번 확인 해주세요."))
    }

    return (
        <>
            <SubHeader page={"상품 등록"} />
            <MainImg PROXY={PROXY} productForm={productForm} setProductForm={setProductForm} mainImg={mainImg} setMainImg={setMainImg} />
            <ProductName productForm={productForm} setProductForm={setProductForm} name={name} setName={setName}/>
            <Category productForm={productForm} setProductForm={setProductForm} category={category} setCategory={setCategory}/>
            <Price productForm={productForm} setProductForm={setProductForm} price={price} setPrice={setPrice} />
            <Unit productForm={productForm} setProductForm={setProductForm} unit={unit} setUnit={setUnit}/>
            {/* <Contents htmlContent={htmlContent}/> */}
            <DeliveryType productForm={productForm} setProductForm={setProductForm} delivery={delivery} setDelivery={setDelivery}/>
            <div className='ProductAddBtn' onClick={onProductAdd}>상품 등록하기</div>
        </>
    );
};

export default SellerProductAddPage;