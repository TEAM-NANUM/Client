import react, { useState, useCallback } from "react";
import axios from "axios";
import DaumPostcode from 'react-daum-postcode';
import "../../styles/Group/GroupInfoInput.css"

const GroupInfoInput = ({ PROXY }) => {
    const [nickname, setNickname] = useState("");
    const [openPostCode, setOpenPostCode] = useState(false);
    const [phoneNumber1, setPhoneNumber1] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");
    const [phoneNumber3, setPhoneNumber3] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [address, setAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [addErr, setAddErr] = useState(false);

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

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
        setAddErr(false);
    }

    const onChangeDetailAddress = (e) => {
        setDetailAddress(e.target.value);
        setAddErr(false);
    }

    const handle = {
        clickButton: () => {
            setOpenPostCode(current => !current);
            setAddErr(false);
        },
        selectAddress: (data) => {
            setZipCode(data.zonecode);
            setAddress(data.address);
            setOpenPostCode(false);
            setAddErr(false);
        },
    }

    const handleSubmit = useCallback(async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const requestData = {
                nickname: nickname,
                phone_number: `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`,
                address: {
                    zip_code: zipCode,  
                    default_address: address,
                    detail_address: detailAddress
                }
            };

            if (accessToken) {
                await axios.post(`${PROXY}/api/signup/guest`, requestData, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                window.location.replace("/group")
                setNickname("");
                setOpenPostCode("");
                setZipCode("");
                setAddress("");
                setDetailAddress("");
            } else {
                console.log("Access token이 없습니다.");
            }
        } catch (error) {
            setAddErr(true)
        }
    }, [nickname, zipCode, address, detailAddress, phoneNumber1, phoneNumber2, phoneNumber3]);

    return (
        <>
            <div className="group_add_conatiner">
                <div className="GroupInfo_address">
                    <div className="group_add_info">이름</div>
                    <input
                        style={{
                            marginBottom: "15px"
                        }}
                        className="group_add_input"
                        placeholder="별명이나 이름"
                        value={nickname}
                        onChange={onChangeNickname}
                    ></input>
                    

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




                    
                    <div className="group_add_info">주소</div>
                    <div className="zipCode">
                        <input className="group_add_input" placeholder="우편번호" value={zipCode} disabled></input>
                        <button className="zip_btn" onClick={handle.clickButton}>주소 찾기</button>
                    </div>
                    
                    {openPostCode &&
                        <div style={{margin: "8px 16px", border: "1px solid darkgray"}}>
                            <DaumPostcode
                                onComplete={handle.selectAddress}
                                autoClose={false}/></div>
                    }
                    <input className="group_add_input" style={{marginTop: "6px"}} placeholder="주소" value={address} disabled></input>
                    <input
                        style={{marginTop: "6px"}}
                        className="group_add_input"
                        placeholder="상세주소"
                        value={detailAddress}
                        onChange={onChangeDetailAddress}
                    ></input>
                </div>
            </div>
            <div className="ShoppingCartSelect_container" style={{flexDirection: "column", height: addErr ? "92px":""}}>        
                {addErr && <p style={{margin  : "5px 0 0 0", padding: 0, fontWeight: "400", fontSize: "14px", color:"rgb(247, 0, 0)"}}>정보를 모두 입력해주세요</p>}
                <div className={false ? "purchase_disable" : "select_purchase"}  onClick={handleSubmit}>
                    <p>그룹원 추가하기</p>
                </div>
            </div>
        </>
    )
}

export default GroupInfoInput;