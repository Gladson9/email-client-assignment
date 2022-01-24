import React from "react";
import { useDispatch } from "react-redux";
import { getEmailBody } from "../../redux/actions/emailActions";
import { dateFormat } from "../../utils/dateFormat";
import { toTitleCase } from "../../utils/toTitleCase";
import Avatar from "./Avatar";

const EmailListItem = ({ details }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getEmailBody(details));
  };

  return (
    <div onClick={handleClick} className="email-item">
      <Avatar name={details.from.name} />
      <div className="details">
        <div>
          From:
          <strong>
            {toTitleCase(details.from.name)} &#60;{details.from.email}&#62;
          </strong>
        </div>
        <div className="subject">
          Subject: <strong>{details.subject}</strong>
        </div>
        <div className="short-description">{details.short_description}</div>
        <div className="date">{dateFormat(details.date)}</div>
      </div>
    </div>
  );
};

export default EmailListItem;
