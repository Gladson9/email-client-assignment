export const getEmails = () => async (dispatch) => {
  const fetchData = await fetch("https://flipkart-email-mock.now.sh/");
  const data = fetchData.json();
  data.then((emails) => {
    dispatch({
      type: "GET_EMAILS",
      payload: emails,
    });
  });
};

export const getEmailBody = (details) => async (dispatch) => {
  const fetchData = await fetch(
    `https://flipkart-email-mock.now.sh/?id=${details.id}`
  );
  const data = fetchData.json();
  data.then((emailBody) => {
    dispatch({
      type: "GET_EMAIL_BODY",
      payload: {
        ...details,
        ...emailBody,
      },
    });
  });
};
