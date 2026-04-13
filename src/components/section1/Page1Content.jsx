import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  console.log(props);
  return (
    <div className='pb-8 pt-6 h-[ 100vh ]  gap-8 flex items-center'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
