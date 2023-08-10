import React from 'react';
import AddressItem from './AddressItem';
import "../../styles/Address/AddressList.css";

const AddressList = ({addressList, PROXY}) => {
    return (
        <div className='AddressList_container'>
            <div className='AddressList_header'>
                <p>나의 배송지</p>
                <img src='./img/imgAddress/AddressIcon.svg' alt='나의 배송지'/>
            </div>
            {addressList.delivery_address.map((item, key) => <AddressItem PROXY={PROXY} key={key} item={item}/>)}  
        </div>
    );
};

export default AddressList;