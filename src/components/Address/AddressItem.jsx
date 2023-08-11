import React from 'react';
import "../../styles/Address/AddressItem.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddressItem = ({PROXY, addressList, item, setFixNum}) => {

   const navigate = useNavigate();

   const onDelete = () => {
    axios.delete(`${PROXY}/api/delivery-address/${item.delivery_id}`, {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      }})
      .then((res) => alert(`배송지를 삭제하시겠습니까?`))
      .then((res) => alert(`선택한 배송지가 삭제됐습니다.`))
      .then((res) => window.location.reload())
      .catch((err) => console.log(err))
   }

   const onDefault = () => {
    axios.put(`${PROXY}/api/delivery-address/default?id=${item.delivery_id}`, item.delivery_id, {
      headers : {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      }
    })
    .then((res) => console.log(res))
    .then((res) => alert(`선택한 배송지를 기본 배송지로 설정하시겠습니까?`))
    .then((res) => alert(`선택한 배송지가 기본 배송지로 설정됐습니다.`))
    .then((res) => window.location.reload())
    .catch((err) => console.log(err))
   }

   const onFixForm = () => {
    setFixNum(addressList.delivery_address.findIndex((i) => i.delivery_id === item.delivery_id))
    navigate('/addressFix')
   }

  return (
        <div className='AddressItem_container'>
          <div className='AddressItem_Header'>
            <div className='AddressItem_Header_left'>
              <div className='AddressItem_Header_name'>{item.nickname}</div>
              {(item.is_default) && <div className='address_default' onClick={onDelete}>기본 배송지</div>}
            </div>
            <div className='address_delete' onClick={onDelete}>배송지 삭제</div>
          </div>
          <div className='AddressItem_address'>{item.address.detailAddress}</div>
          <div className='AddressItem_bottom'>
            <div className='AddressItem_bottom_box'>
              <div onClick={onFixForm}>정보 수정</div>
              {(item.is_default === false) && <div onClick={onDefault}>기본 배송지로</div>}
            </div>
          </div>
        </div>
    );
};

export default AddressItem;