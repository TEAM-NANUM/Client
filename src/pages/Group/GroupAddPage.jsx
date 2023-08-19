import React, { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";
import GroupInfoInput from "../../components/Group/GroupInfoInput";
import Footer from "../../components/Footer/Footer";

const GroupAddPage = ({ PROXY }) => {
  return (
    <div>
      <SubHeader page={"그룹원 추가"} useX></SubHeader>
      <GroupInfoInput PROXY={PROXY}></GroupInfoInput>
    </div>
  );
};

export default GroupAddPage;
