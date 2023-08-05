import React from 'react';
import "../../styles/Address/AddressItem.css";

const AddressItem = ({item}) => {
  console.log(item);
    return (
        <div className='AddressItem_container'>
          <div className='AddressItem_Header'>
            <div>{item.nickname}</div>
          </div>
          <div className='AddressItem_address'>{item.detail_address}</div>
          <div className='AddressItem_bottom'>
            <div>기본 배송지로</div>
          </div>
        </div>
    );
};

export default AddressItem;