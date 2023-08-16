import React, { useState } from "react";
import "../../styles/Group/Group.css"

const Group = ({ group }) => {
    const [showInviteCode, setShowInviteCode] = useState(false);
    
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopy(true);
        } catch (error) {
            alert("초대링크 복사 실패!");
        }
    }

    return (
        <div className="Group_container">
            <div className="Group_content">
                <img
                    style={{ margin: "0 10px 0 0", padding: 0, objectFit: "cover", width: "50px" }}
                    src='./img/imgMyPage/profilGuest.svg'
                    alt='프로필 사진'
                />
                <div>
                    <div className="name">{group.nickname}</div>
                    <div className="address">{group.default_address}</div>
                </div>
            </div>
            <div className="invitation_code">
                <input
                    value={showInviteCode ? group.invite_code : "********"}
                    className="invitation_code_text"
                    readOnly
                />
                <img style={{cursor: "pointer", position: "relative", objectFit:"cover", width: "18px", height: "18px", top:"15px", left: "-23px"}} src={`./img/imgGroup/eye${showInviteCode?"Off":""}.svg`} alt="보이기" onClick={()=>{
                    setShowInviteCode(!showInviteCode);
                }}></img>
                <button
                    className="invitation_code_button"
                    onClick={() => {
                        handleCopy(`https://hanche.store/group/q=${group.invite_code}`);
                    }}
                >
                    링크 복사
                </button>
            </div>
            {isCopy && <div style={{color:"#ff2828", textAlign: "center", marginBottom: "20px", fontSize: "12px", padding: "auto"}}>로그인 링크가 복사되었습니다. 노출되지 않도록 주의하세요!</div>}
        </div>
    )
}

export default Group;
