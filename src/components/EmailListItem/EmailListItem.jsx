import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getEmailBody } from "../../redux/actions/emailActions";
import { dateFormat } from "../../utils/dateFormat";
import { toTitleCase } from "../../utils/toTitleCase";
import Avatar from "./../Avatar/Avatar";

const EmailListItem = ({ details, selectedId, setSelectedId }) => {
  const dispatch = useDispatch();
  const [inFavorite, setInFavorite] = useState(false);
  const { favorites } = useSelector((state) => state);

  const handleClick = () => {
    dispatch(getEmailBody(details));
    setSelectedId(details.id);
  };

  useEffect(() => {
    const checkFovorite = () => {
      setInFavorite(favorites.some((id) => id === details.id));
    };
    checkFovorite();
  }, [favorites, details]);

  return (
    <div
      onClick={handleClick}
      className={`email-item ${details.read ? "read" : ""} ${
        selectedId === details.id ? "selected" : ""
      } `}
    >
      <Avatar name={details.from.name} />
      <div className="details">
        <div>
          From:{" "}
          <strong>
            {toTitleCase(details.from.name)} &#60;{details.from.email}&#62;
          </strong>
        </div>
        <div className="subject">
          Subject: <strong>{details.subject}</strong>
        </div>
        <div className="short-description">{details.short_description}</div>
        <div className="date">
          {dateFormat(details.date)}
          {inFavorite && <span className="favorite-tag">Favorite</span>}
        </div>
      </div>
    </div>
  );
};

export default EmailListItem;
