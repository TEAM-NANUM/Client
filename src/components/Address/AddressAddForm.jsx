import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import "../../styles/Address/AddressAddForm.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddressAddForm = ({PROXY}) => {

    const navigate = useNavigate();

    const [openPostCode, setOpenPostCode] = useState(false);
    
    const [receiver, setReceiver] = useState("");
    const [nickname, setNickname] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [zip_code, setZip_code] = useState("");
    const [default_address, setDefault_address] = useState("");
    const [detail_address, setDetail_address] = useState("");

    const [addressAddForm, setAddressAddForm] = useState(
        {
            "receiver": "",
            "nickname" : "",
            "address" : {
                "zip_code": "",
                "default_address": "",
                "detail_address": ""
            },
            "phone_number" : ""
        }
    );

    const onReceiver = (e) => {
        setReceiver(e.currentTarget.value)
        setAddressAddForm({...addressAddForm, "receiver" : e.currentTarget.value})
    }

    const onNickname = (e) => {
        setNickname(e.currentTarget.value)
        setAddressAddForm({...addressAddForm, "nickname" : e.currentTarget.value})
    }

    const onPhoneNumber = (e) => {
        setPhone_number(e.currentTarget.value)
        setAddressAddForm({...addressAddForm, "phone_number" : e.currentTarget.value})
    }

    const onDetailAddress = (e) => {
        setDetail_address(e.currentTarget.value)
        setAddressAddForm({...addressAddForm, "address" : {"zip_code" : zip_code, "default_address" : default_address, "detail_address" : e.currentTarget.value}})
    }

    const handle = {
        clickButton: () => {
            setOpenPostCode(current => !current);
        },
        selectAddress: (data) => {
            setZip_code(data.zonecode);
            setDefault_address(data.address);
            setOpenPostCode(false);
        },
    }

    const onForm = () => {
        axios.post(`${PROXY}/api/delivery-address`, addressAddForm, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }})
            .then((res) => alert("배송지를 추가했습니다."))
            .then((res) => navigate("/address"))
            .catch((err) => console.log(err))
    }

    return (
        <div className='AddressAddForm_container'>
            <div className='AddressAddForm_name'>
                <div className='AddressAddForm_header'>1. 이름</div>
                <input value={receiver} type='text' placeholder='이름을 입력해주세요.' onChange={onReceiver}/>
            </div>
            <div className='AddressAddForm_number'>
                <div className='AddressAddForm_header'>2. 전화번호</div>
                <input value={phone_number} type='text' placeholder='전화번호를 입력해주세요.' onChange={onPhoneNumber}/>
            </div>
            <div className='AddressAddForm_nickname'>
                <div className='AddressAddForm_header'>3. 별칭</div>
                <input value={nickname} type='text' placeholder='주소지의 별칭을 입력해주세요.' onChange={onNickname}/>
            </div>
            <div className='AddressAddForm_address'>
                <div className='AddressAddForm_header'>4. 주소지 등록</div>
                <div className='AddressAddForm_dataInput'>
                    <input className='address_zip_code' value={zip_code} type='text' placeholder='우편번호' />
                    <button onClick={handle.clickButton}>우편번호 찾기</button>
                    {openPostCode &&
                        <DaumPostcode
                            onComplete={handle.selectAddress}
                            autoClose={false}
                        />}
                </div>
                <div className='AddressAddForm_dataInput'>
                    <input className='address_default_address' value={default_address} type='text' placeholder='주소' />
                </div>
                <div className='AddressAddForm_dataInput'>
                    <input className='address_detail_address' value={detail_address} type='text' placeholder='상세주소' onChange={onDetailAddress}/>
                </div>
            </div>
            <div className='AddressAddForm_add' onClick={onForm}>등록</div>
        </div>
    );
};

export default AddressAddForm;