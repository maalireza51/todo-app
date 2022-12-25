import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./combineReducers";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
);

export default store