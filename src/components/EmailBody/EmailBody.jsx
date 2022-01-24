import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateFormat } from "../../utils/dateFormat";
import Avatar from "../Avatar/Avatar";

import { markFavorite } from "./../../redux/actions/emailActions";

const EmailBody = ({ emailBody }) => {
  const dispatch = useDispatch();
  const [inFavorite, setInFavorite] = useState(false);
  const { favorites } = useSelector((state) => state);

  const handleClick = () => {
    dispatch(markFavorite(emailBody.id));
  };

  useEffect(() => {
    const checkFovorite = () => {
      setInFavorite(favorites.some((id) => id === emailBody.id));
    };
    checkFovorite();
  }, [emailBody, favorites]);

  return (
    <div className="email-body">
      <Avatar name={emailBody.from.name} />
      <div className="email-body-details">
        {!inFavorite && (
          <button onClick={handleClick} className="favorite">
            Mark as favorite
          </button>
        )}

        <h2>{emailBody.subject}</h2>
        <div className="date">{dateFormat(emailBody.date)}</div>
        <div
          className="email-body-description"
          dangerouslySetInnerHTML={{ __html: emailBody.body }}
        />
      </div>
    </div>
  );
};

export default EmailBody;
