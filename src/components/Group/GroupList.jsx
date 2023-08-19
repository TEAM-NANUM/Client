import react from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Group/GroupList.css";
import Group from "../Group/Group";

const GroupList = ({ group }) => {
  const navigate = useNavigate();

  if (!group || !Array.isArray(group)) {
    return null;
  }

  return (
    <div className="GroupList_container">
      <div
        style={{
          paddingBottom: "8px",
          borderBottom: "0.1px solid darkgray",
          display: "flex",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{ fontSize: "17px", padding: "0 16px", margin: "0" }}
          className="pay_span"
        >
          그룹원 목록
          <span
            style={{
              marginLeft: "7px",
              fontSize: "8px",
              fontWeight: "400",
              color: "#919191",
            }}
          >
            링크를 통해 바로 로그인 할 수 있어요
          </span>
        </span>
        <div
          className="group_add_btn"
          onClick={() => {
            navigate("/groupAdd");
          }}
        >
          그룹원 추가 +
        </div>
      </div>
      <div style={{ marginTop: "18px" }}>
        {group.map((item, idx) => (
          <>
            <Group group={item} key={idx} />
            {idx !== group.length - 1 && (
              <div
                className="divider"
                style={{ height: "2px", marginBottom: "23px" }}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default GroupList;
