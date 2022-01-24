import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import Avatar from "../EmailListItem/Avatar";

const EmailBody = ({ emailBody }) => {
  return (
    <div className="email-body">
      <Avatar name={emailBody.from.name} />
      <div className="email-body-details">
        <button className="favorite">Mark as favorite</button>
        <h2>{emailBody.subject}</h2>
        <div className="date">{dateFormat(emailBody.date)}</div>
        <div dangerouslySetInnerHTML={{ __html: emailBody.body }} />
      </div>
    </div>
  );
};

export default EmailBody;
