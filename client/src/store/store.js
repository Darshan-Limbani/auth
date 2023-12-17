import { thunk } from "redux-thunk";
import authReducer from "./auth/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware } from "redux";


const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store