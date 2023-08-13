import react from "react";
import "../../styles/Group/Group.css"

const Group = ({ group }) => {
    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            alert("초대링크 복사 완료!");
        } catch (error) {
            alert("초대링크 복사 실패!");
        }
    }

    return (
        <div className="Group_container">
            <div className="Group_content">
                <img src="./img/imgGroup/myInfo_Icon.png" alt="아이콘"></img>
                <div className="name">{group.nickname}</div>
                <div className="address">{group.default_address}</div>
            </div>
            <div className="invitation_code">
                <div className="invitation_code_text">{group.invite_code}</div>
                <button
                    className="invitation_code_button"
                    onClick={() => handleCopy(`{group/invite_code}`)}>
                    초대링크복사
                </button>
            </div>
        </div>
    )
}

export default Group;