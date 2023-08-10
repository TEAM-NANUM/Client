import React from 'react';
import "../../styles/Address/AddressItem.css";
import axios from 'axios';

const AddressItem = ({PROXY, item}) => {

   console.log(item)

   const onDelete = () => {
    // console.log(item.delivery_id)
    axios.delete(`${PROXY}/api/delivery-address/${item.delivery_id}`, {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      }})
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
   }

  return (
        <div className='AddressItem_container'>
          <div className='AddressItem_Header'>
            <div className='AddressItem_Header_name'>{item.nickname}</div>
            {(!item.is_default) && <div className='address_delete' onClick={onDelete}>배송지 삭제</div>}
          </div>
          <div className='AddressItem_address'>{item.address.detailAddress}</div>
          <div className='AddressItem_bottom'>
            <div className='AddressItem_bottom_box'>
              <div>정보 수정</div>
              {(!item.is_default) && <div>기본 배송지로</div>}
            </div>
          </div>
        </div>
    );
};

export default AddressItem;