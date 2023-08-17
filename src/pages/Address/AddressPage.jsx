import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import "../../styles/Address/AddressPage.css";
import AddressList from '../../components/Address/AddressList';
import axios from 'axios';

const AddressPage = ({PROXY, addressList, setAddressList, setFixNum}) => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams]=useSearchParams();

    useEffect(() => {
        getAddress();
    }, [])

    const getAddress = () =>{
        axios.get(`${PROXY}/api/delivery-address`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }})
            .then((res) => setAddressList(res.data))
            .catch((err) => console.log(err))
    }
    

    return (
        <>
            <SubHeader page={"배송지 관리"} path={searchParams.get("purchase")==="true"?"/purchase":"/mypage"}/>
            {addressList.delivery_address.length!==0?<AddressList getAddress={getAddress} addressList={addressList} PROXY={PROXY} setFixNum={setFixNum} />:<img src='./img/imgAddress/noAddress.svg' style={{marginTop: "90px"}} alt="배송지 비어있음"></img>}
            <div className="ShoppingCartSelect_container" style={{flexDirection: "column"}}>        
                <div className={false ? "purchase_disable" : "select_purchase"}  onClick={()=>navigate('/addressAdd?purchase='+ searchParams.get("purchase") || "")}>
                    <p>주소 추가</p>
                </div>
            </div>
        </>
    );
};

export default AddressPage;