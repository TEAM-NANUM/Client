import React from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import "../../styles/Address/AddressFixPage.css";
import AddressFixForm from '../../components/Address/AddressFixForm';

const AddressFixPage = ({PROXY, addressList}) => {
    return (
        <>
            <SubHeader page={"배송지 수정"} />
            <div className='AddressFixPage_container'>
                <div className='AddressFixPage_header'>
                    <p>배송지 정보 수정</p>
                    <img src='./img/imgAddress/AddressAdd.svg' alt='배송지 정보 등록'/>
                </div>
                <AddressFixForm />
            </div>
            <Footer />
        </>
    );
};

export default AddressFixPage;