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
  dispatch({
    type: "MARK_READ",
    payload: details,
  });
};

export const markFavorite = (details) => ({
  type: "MARK_FAVORITE",
  payload: details,
});

export const applyFilters = (value) => ({
  type: "APPLY_FILTERS",
  payload: value,
});
