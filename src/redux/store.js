import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import emailsReducer from "./reducers/emailsReducer";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  emailsReducer,
  composeEnchancer(applyMiddleware(thunk))
);

export { store };
