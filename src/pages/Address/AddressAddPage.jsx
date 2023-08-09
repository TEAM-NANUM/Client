import React from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import "../../styles/Address/AddressAddPage.css";
import AddressAddForm from '../../components/Address/AddressAddForm';

const AddressAddPage = () => {
    return (
        <>
            <SubHeader page={"배송지 추가"} />
            <div className='AddressAddPage_container'>
                <div className='AddressAddPage_header'>
                    <p>배송지 정보 등록</p>
                    <img src='./img/imgAddress/AddressAdd.svg' alt='배송지 정보 등록'/>
                </div>
                <AddressAddForm />
            </div>
            <Footer />
        </>
    );
};

export default AddressAddPage;