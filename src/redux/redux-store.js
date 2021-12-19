import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import regReducer from "./reg-reducer";
import testReducer from "./test-reducer";

let reducers = combineReducers({
  authPage: authReducer,
  regPage: regReducer,
  home: testReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
