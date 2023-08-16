import react from "react";
import "../../styles/Group/GroupList.css"
import Group from "../Group/Group";

const GroupList = ({ group }) => {
    if (!group || !Array.isArray(group)) {
        return null;
    }

    return (
        <div className="GroupList_container">
            <div className="GroupList_title">
                <div>그룹원 목록</div>
                <img src="./img/imgGroup/groupList.png" alt="그룹원 목록" />
            </div>
            <div className="GroupList_content">
                {group.map((item, idx) => (
                    <Group group={item} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default GroupList;