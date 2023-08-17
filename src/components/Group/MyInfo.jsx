import react from "react";
import "../../styles/Group/MyInfo.css"

const MyInfo = ({ group }) => {
    return (
        <div className="MyInfo_container">
            <span style={{fontSize: "17px"}} className="pay_span">
                내 정보 
            </span>
            <div className="MyInfo_content">
                <img style={{margin: "0 10px 0 0", padding: 0, objectFit:"cover", width: "65px",}} src='./img/imgMyPage/profilHost.svg' alt='프로필 사진' />
                <div style={{marginLeft: "4px"}}>
                    <div className="account_title">일반 회원</div>
                    <div style={{margin: "0 0 3px 0", fontWeight: "500",fontSize: "22px"}}>{group.username}</div>
                    <div className="MyInfo_money">
                        <div>잔액</div>
                            {group.point &&<div className="money">{group.point.toLocaleString()}</div>}
                        <div>원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;