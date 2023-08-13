import react from "react";
import "../../styles/Group/MyInfo.css"

const MyInfo = ({ group }) => {
    return (
        <div className="MyInfo_container">
            <div className="MyInfo_title">
                <div>내 정보</div>
                <img src="./img/imgGroup/myInfo.png" alt="내정보"></img>
            </div>
            <div className="MyInfo_content">
                <img src="./img/imgGroup/myInfo_Icon.png" alt="내정보아이콘"></img>
                <div>
                    <div className="account_title">대표 계정</div>
                    <div className="name">{group.host.username}</div>
                    <div className="MyInfo_money">
                        <div>머니: </div>
                        <div className="money">{group.host.point}</div>
                        <div>원</div>
                        <img src="./img/imgGroup/money_Icon.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;