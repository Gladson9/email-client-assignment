import React, { useEffect, useState } from "react";
import Filters from "./components/filters/Filters";
import EmailList from "./components/EmailList/EmailList";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "./redux/actions/emailActions";
import EmailBody from "./components/EmailBody/EmailBody";

function App() {
  const dispatch = useDispatch();
  const { emailBody } = useSelector((state) => state);
  // const [emailBodyExists, setEmailBodyExists] = useState(false);

  useEffect(() => {
    dispatch(getEmails());
  }, []);

  return (
    <div className="App">
      <Filters />
      <div className="container">
        <EmailList />
        {emailBody !== null ? <EmailBody emailBody={emailBody} /> : ""}
      </div>
    </div>
  );
}

export default App;
