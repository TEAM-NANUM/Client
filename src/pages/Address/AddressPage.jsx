import React, { useState } from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import "../../styles/Address/AddressPage.css";
import AddressList from '../../components/Address/AddressList';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {

    const navigate = useNavigate();

    const [addressList,  setAddressList] = useState({
        "delivery_address":[
            {
                "address_id" : "배송지 pk",
                "nickname" : "배송지 별칭",
                "default_address": "주소",
                "detail_address" : "상세 주소",
                "isDefault" : "true"//기본 배송지 여부
            },
            {
                "address_id" : "배송지 pk",
                "nickname" : "배송지 별칭",
                "default_address": "주소",
                "detail_address" : "상세 주소",
                "isDefault" : "true"//기본 배송지 여부
            },
            {
                "address_id" : "배송지 pk",
                "nickname" : "배송지 별칭",
                "default_address": "주소",
                "detail_address" : "상세 주소",
                "isDefault" : "true"//기본 배송지 여부
            },
        ]
    })

    return (
        <>
            <SubHeader page={"배송지 관리"} />
            <div className='AddressPage_container'>
                <AddressList addressList={addressList} />
                <div className='Address_add' onClick={() => navigate("/addressAdd")}>+ 배송지 추가</div>
            </div>
            <Footer />
        </>
    );
};

export default AddressPage;