import react, { useState, useCallback } from "react";
import axios from "axios";
import DaumPostcode from 'react-daum-postcode';
import "../../styles/Group/GroupInfoInput.css"

const GroupInfoInput = ({ PROXY }) => {
    const [nickname, setNickname] = useState("");
    const [openPostCode, setOpenPostCode] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [address, setAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    const onChangeDetailAddress = (e) => {
        setDetailAddress(e.target.value);
    }

    const handle = {
        clickButton: () => {
            setOpenPostCode(current => !current);
        },
        selectAddress: (data) => {
            setZipCode(data.zonecode);
            setAddress(data.address);
            setOpenPostCode(false);
        },
    }

    const handleSubmit = useCallback(async () => {
        try {
            const requestData = {
                nickname: nickname,
                address: {
                    zip_code: zipCode,
                    default_address: address,
                    detail_address: detailAddress
                }
            };

            await axios.post(`${PROXY}/api/signup/guest`, requestData);

            window.alert("등록되었습니다.");
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="GroupInfoInput_container">
            <div className="GroupInfoInput_title">
                <div>그룹원 정보 입력</div>
                <img src="../img/imgGroup/groupAdd_Icon.png" alt="그룹추가아이콘"></img>
            </div>
            <div className="GroupInfo_nickname">
                <div className="GroupInfo_nickname_title">1. 별칭</div>
                <input
                    className="GroupInfo_nickname_Input"
                    placeholder="별명이나 이름"
                    value={nickname}
                    onChange={onChangeNickname}
                ></input>
            </div>
            <div className="GroupInfo_address">
                <div className="GroupInfo_address_title">2. 주소지 등록</div>
                <div className="zipCode">
                    <input className="zipCode_input" placeholder="우편번호" value={zipCode} disabled></input>
                    <button className="zipCode_input_button" onClick={handle.clickButton}>우편번호 찾기</button>
                    {openPostCode &&
                        <DaumPostcode
                            onComplete={handle.selectAddress}
                            autoClose={false}
                        />}
                </div>
                <input className="address_input" placeholder="주소" value={address} disabled></input>
                <input
                    className="addressDetail_input"
                    placeholder="상세주소"
                    value={detailAddress}
                    onChange={onChangeDetailAddress}
                ></input>
            </div>
            <div className="GroupInfoInput_page_coment">그룹원들은 대표 계정의 머니를 공유합니다.</div>
            <div className="Group_add_button">추가</div>
        </div>
    )
}

export default GroupInfoInput;