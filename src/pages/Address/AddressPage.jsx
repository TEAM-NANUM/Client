import React, { useEffect, useState } from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import "../../styles/Address/AddressPage.css";
import AddressList from '../../components/Address/AddressList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddressPage = ({PROXY, addressList, setAddressList, setFixNum}) => {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${PROXY}/api/delivery-address`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }})
            .then((res) => setAddressList(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <SubHeader page={"배송지 관리"} />
            <div className='AddressPage_container'>
                <AddressList addressList={addressList} PROXY={PROXY} setFixNum={setFixNum} />
                <div className='Address_add' onClick={() => navigate("/addressAdd")}>+ 배송지 추가</div>
            </div>
            <Footer />
        </>
    );
};

export default AddressPage;