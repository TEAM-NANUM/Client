import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import "../../styles/SellerAccount/SellerJoinForm.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerJoinForm = ({PROXY}) => {

    const navigate = useNavigate();

    const [openPostCode, setOpenPostCode] = useState(false);

    const [name, setName] = useState("")
    const [phone_number, setPhone_Number] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirm_Passwerd] = useState("");
    const [zip_code, setZip_code] = useState("");
    const [default_address, setDefault_address] = useState("");
    const [detail_address, setDetail_address] = useState("");
    const [sellerJoinForm, setSellerJoinForm] = useState({
        "username": "",
        "email": "",
        "password": "",
        "phone_number": "",
        "address": {
          "zip_code": "",
          "default_address": "",
          "detail_address": ""
        }
    })

    const onName = (e) => {
        setName(e.currentTarget.value)
        setSellerJoinForm({...sellerJoinForm, "username" : e.currentTarget.value})
    }

    const onEmail = (e) => {
        setEmail(e.currentTarget.value)
        setSellerJoinForm({...sellerJoinForm, "email" : e.currentTarget.value})
    }

    const onPassword = (e) => {
        setPassword(e.currentTarget.value)
        setSellerJoinForm({...sellerJoinForm, "password" : e.currentTarget.value})
    }

    const onPasswordConfim = (e) => {
        setConfirm_Passwerd(e.currentTarget.value)
    }

    const onPhone_Number = (e) => {
        setPhone_Number(e.currentTarget.value)
        setSellerJoinForm({...sellerJoinForm, "phone_number" : e.currentTarget.value})
    }

    const onDetailAddress = (e) => {
        setDetail_address(e.currentTarget.value)
        setSellerJoinForm({...sellerJoinForm, "address" : {"zip_code" : zip_code, "default_address" : default_address, "detail_address" : e.currentTarget.value}})
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

    const onSellerJoin = () => {
        if (password === confirm_password) {
            axios.post(`${PROXY}/api/signup/seller`, sellerJoinForm)
            .then((res) => alert("회원가입에 성공했습니다!"))
            .then((res) => alert("전화번호 형식을 맞춰 주세요. (010-0000-0000)"))
            .catch((err) => console.log(err))
        } else {
            alert("비밀번호가 일치하지 않습니다.")
        }
    }

    return (
        <div className='SellerJoinForm_container'>
            <div className='SellerJoinForm_name'>
                <div className='SellerJoinForm_header'>1. 이름</div>
                <input className='SellerJoinForm_data' value={name} type='text' placeholder='이름을 입력해주세요.' onChange={onName} />
            </div>
            <div className='SellerJoinForm_phone_number'>
                <div className='SellerJoinForm_header'>2. 전화번호</div>
                <input className='SellerJoinForm_data' value={phone_number} type='text' placeholder='전화번호를 입력해주세요. (010-0000-0000 형식)' onChange={onPhone_Number} />
            </div>
            <div className='SellerJoinForm_email'>
                <div className='SellerJoinForm_header'>3. 이메일</div>
                <input className='SellerJoinForm_data' value={email} type='text' placeholder='이메일을 입력해주세요.' onChange={onEmail} />
            </div>
            <div className='SellerJoinForm_password'>
                <div className='SellerJoinForm_header'>4. 비밀번호</div>
                <input className='SellerJoinForm_data' value={password} type='password' placeholder='비밀번호를 입력해주세요.' onChange={onPassword} />
                
            </div>
            <div className='SellerJoinForm_password_confirm'>
                <div className='SellerJoinForm_header'>5. 비밀번호 확인</div>
                <input className='SellerJoinForm_data' value={confirm_password} type='password' placeholder='비밀번호를 다시 입력해주세요.' onChange={onPasswordConfim} />
            </div>
            <div className='SellerJoinForm_address'>
                <div className='SellerJoinForm_header'>6. 주소지 등록</div>
                <div className='SellerJoinForm_address_form'>
                    <input className='address_zip_code' value={zip_code} type='text' placeholder='우편번호' />
                    <button onClick={handle.clickButton}>우편번호 찾기</button>
                    {openPostCode &&
                        <DaumPostcode
                            onComplete={handle.selectAddress}
                            autoClose={false}
                        />}
                </div>
                <input className='SellerJoinForm_data' value={default_address} type='text' placeholder='주소' />
                <input className='SellerJoinForm_data' value={detail_address} type='text' placeholder='상세주소' onChange={onDetailAddress}/>
            </div>
            <div className='SellerJoinForm_joinBtn' onClick={onSellerJoin}>회원가입 하기</div>
        </div>
    );
};

export default SellerJoinForm;