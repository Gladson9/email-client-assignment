import React from "react";
import { useSelector } from "react-redux";
import EmailListItem from "../EmailListItem/EmailListItem";

const EmailList = () => {
  const { emailList, emailBody } = useSelector((state) => state);

  return (
    <div className={`email-list ${emailBody !== null ? "body-active" : ""}`}>
      {emailList?.list?.map((email) => (
        <EmailListItem details={email} key={email.id} />
      ))}
    </div>
  );
};

export default EmailList;
