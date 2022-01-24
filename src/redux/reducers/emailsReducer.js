const initialState = {
  emailList: [],
  emailBody: null,
};

const emailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_EMAILS":
      return {
        ...state,
        emailList: payload,
      };

    case "GET_EMAIL_BODY":
      return {
        ...state,
        emailBody: payload,
      };
    default:
      return state;
  }
};
export default emailsReducer;
