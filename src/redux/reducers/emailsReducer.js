const initialState = {
  emailList: [],
  emailBody: null,
  favorites: [],
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

    case "MARK_FAVORITE": {
      const updatedState = JSON.parse(JSON.stringify(state));
      updatedState.favorites.push(payload);
      return updatedState;
    }

    case "MARK_READ": {
      const updatedState = JSON.parse(JSON.stringify(state));
      let emailIdx = updatedState.emailList.list.findIndex(
        (email) => email.id === payload.id
      );
      let email = updatedState.emailList.list.find(
        (email) => email.id === payload.id
      );
      updatedState["emailList"]["list"][emailIdx] = {
        ...email,
        read: true,
      };
      return updatedState;
    }
    case "APPLY_FILTERS": {
      const updatedState = JSON.parse(JSON.stringify(state));
      if (payload === "read") {
        const readEmails = updatedState.emailList.list.filter(
          (email) => email.read === true
        );
        const unReadEmails = updatedState.emailList.list.filter(
          (email) => email.read !== true
        );
        updatedState.emailList.list = [...readEmails, ...unReadEmails];
      } else if (payload === "unread") {
        const readEmails = updatedState.emailList.list.filter(
          (email) => email.read === true
        );
        const unReadEmails = updatedState.emailList.list.filter(
          (email) => email.read !== true
        );
        updatedState.emailList.list = [...unReadEmails, ...readEmails];
      } else if (payload === "favorites") {
        const favEmails = updatedState.emailList.list.filter((email) =>
          updatedState.favorites.includes(email.id)
        );
        const mails = updatedState.emailList.list.filter(
          (email) => !updatedState.favorites.includes(email.id)
        );
        updatedState.emailList.list = [...favEmails, ...mails];
      }
      updatedState.emailBody = null;
      return updatedState;
    }

    default:
      return state;
  }
};
export default emailsReducer;
