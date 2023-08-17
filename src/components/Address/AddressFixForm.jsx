    // const [receiver, setReceiver] = useState(item.receiver);
    // const [nickname, setNickname] = useState(item.nickname);
    // const [phone_number, setPhone_number] = useState(item.phone_number);
    // const [zip_code, setZip_code] = useState(item.address.zipCode);
    // const [default_address, setDefault_address] = useState(item.address.defaultAddress);
    // const [detail_address, setDetail_address] = useState(item.address.detailAddress);
    import React, { useEffect, useState } from 'react';
    import DaumPostcode from 'react-daum-postcode';
    import "../../styles/Address/AddressAddForm.css";
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios';
    
    
    const AddressFixForm = ({PROXY, item}) => {
    
        const navigate = useNavigate();
    
        const [openPostCode, setOpenPostCode] = useState(false);
        
        const [receiver, setReceiver] = useState(item.receiver);
        const [nickname, setNickname] = useState(item.nickname);
        const [phoneNumber1, setPhoneNumber1] = useState(item.phone_number.split("-")[0]);
        const [phoneNumber2, setPhoneNumber2] = useState(item.phone_number.split("-")[1]);
        const [phoneNumber3, setPhoneNumber3] = useState(item.phone_number.split("-")[2]);
        const [zip_code, setZip_code] = useState(item.address.zipCode);
        const [default_address, setDefault_address] = useState(item.address.defaultAddress);
        const [detail_address, setDetail_address] = useState(item.address.detailAddress);
    
        const [addErr, setAddErr] = useState(false);
    
        const [addressAddForm, setAddressAddForm] = useState(
            {
                "receiver": item.receiver,
                "nickname" : item.nickname,
                "address" : {
                    "zip_code": item.address.zipCode,
                    "default_address": item.address.defaultAddress,
                    "detail_address": item.address.detailAddress
                },
                "phone_number" : item.phone_number
            }
        );
    
        const onReceiver = (e) => {
            setReceiver(e.currentTarget.value)
            setAddressAddForm({...addressAddForm, "receiver" : e.currentTarget.value})
            setAddErr(false);
        }
    
        const onNickname = (e) => {
            setNickname(e.currentTarget.value)
            setAddressAddForm({...addressAddForm, "nickname" : e.currentTarget.value})
            setAddErr(false);
        }
    
        useEffect(()=>{
            setAddressAddForm({...addressAddForm, "phone_number" : `${phoneNumber1.toString()}-${phoneNumber2.toString()}-${phoneNumber2.toString()}`})
        }, [phoneNumber1, phoneNumber2, phoneNumber3])
    
        const onPhoneNumber1 = (e) => {
            const regex = /^[0-9]{0,3}$/;
            if (regex.test(e.currentTarget.value)) {
                setPhoneNumber1(e.currentTarget.value)
            }
            setAddErr(false);
        }
        const onPhoneNumber2 = (e) => {
            const regex = /^[0-9]{0,4}$/;
            if (regex.test(e.currentTarget.value)) {
                setPhoneNumber2(e.currentTarget.value)
            }
            setAddErr(false);
        }
        const onPhoneNumber3 = (e) => {
            const regex = /^[0-9]{0,4}$/;
            if (regex.test(e.currentTarget.value)) {
                setPhoneNumber3(e.currentTarget.value)
            }
            setAddErr(false);
        }
    
        const onDetailAddress = (e) => {
            setDetail_address(e.currentTarget.value)
            setAddressAddForm({...addressAddForm, "address" : {"zip_code" : zip_code, "default_address" : default_address, "detail_address" : e.currentTarget.value}})
            setAddErr(false);
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
            axios.put(`${PROXY}/api/delivery-address/${item.delivery_id}`, addressAddForm, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                }})
            .then((res) => window.location.replace("/address"))
            .catch((err) => setAddErr(true))
        }
    
        return (
            <div className='AddressAddForm_container'>
                    <div className='group_add_info'>이름</div>
                    <input 
                            style={{
                                marginBottom: "15px"
                            }}className='group_add_input' value={receiver} type='text' placeholder='홍길동' onChange={onReceiver}/>
    
    
                    <div className='group_add_info'>전화번호</div>
                    <div className="zipCode">
                        
                        <input 
                            type="text"
                            placeholder='010'
                            style={{
                                marginBottom: "15px",
                                width: "30%",
                                marginRight: "0"
                            }}
                            className='group_add_input' value={phoneNumber1}  onChange={onPhoneNumber1}
                        />
                        <div style={{margin:"0 5px 15px 5px", fontSize: "25px", color:"#a8a8a8", fontWeight: "300"}}>-</div>
                        <input 
                            style={{
                                marginBottom: "15px",
                                width: "30%",
                                marginRight: "0",
                                marginLeft: "0"
                            }}
                            type="text"
                            className='group_add_input' value={phoneNumber2} placeholder='1234' onChange={onPhoneNumber2}
                        />
                        <div style={{margin:"0 5px 15px 5px", fontSize: "25px", color:"#a8a8a8", fontWeight: "300"}}>-</div>
                        <input 
                            style={{
                                marginBottom: "15px",
                                width: "30%",
                                marginLeft: "0"
                            }}
                            type="text"   
                            className='group_add_input' value={phoneNumber3} placeholder='5678' onChange={onPhoneNumber3}
                        />
                    </div>
    
                    <div className='group_add_info'>별칭</div>
                    <input 
                            style={{
                                marginBottom: "15px"
                            }}className='group_add_input' value={nickname} type='text' placeholder='집' onChange={onNickname}/>
    
    
                    <div className="group_add_info">주소</div>
                    <div className="zipCode">
                        <input className="group_add_input" placeholder="우편번호" value={zip_code} disabled></input>
                        <button className="zip_btn" onClick={handle.clickButton}>주소 찾기</button>
                    </div>
                    {openPostCode &&
                            <div style={{margin: "8px 16px", border: "1px solid darkgray"}}>
                                <DaumPostcode
                                    onComplete={handle.selectAddress}
                                    autoClose={false}/></div>
                        }
                    <input className="group_add_input" style={{marginTop: "6px"}} placeholder="주소" value={default_address} disabled></input>
                    <input
                        style={{marginTop: "6px"}}
                        className="group_add_input"
                        placeholder="상세주소"
                        value={detail_address}
                        onChange={onDetailAddress}
                     ></input>
                
                <div className="ShoppingCartSelect_container" style={{flexDirection: "column", height: addErr ? "92px":""}}>        
                    {addErr && <p style={{margin  : "5px 0 0 0", padding: 0, fontWeight: "400", fontSize: "14px", color:"rgb(247, 0, 0)"}}>정보를 모두 입력해주세요</p>}
                    <div className={false ? "purchase_disable" : "select_purchase"}  onClick={onForm}>
                        <p>완료</p>
                    </div>
                </div>
            </div>
        );
    };
    
    export default AddressFixForm;