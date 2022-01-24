import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmailListItem from "../EmailListItem/EmailListItem";

const EmailList = () => {
  const { emailList, emailBody } = useSelector((state) => state);
  const [selectedId, setSelectedId] = useState(emailBody?.id);

  useEffect(() => {
    setSelectedId(emailBody?.id);
  }, [emailBody]);

  return (
    <div className={`email-list ${emailBody !== null ? "body-active" : ""}`}>
      {emailList?.list?.map((email) => (
        <EmailListItem
          setSelectedId={setSelectedId}
          selectedId={selectedId}
          details={email}
          key={email.id}
        />
      ))}
    </div>
  );
};

export default EmailList;
