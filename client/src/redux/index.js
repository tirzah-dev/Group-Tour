import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import usersReducer from "./usersRedux";

const store = createStore(combineReducers({users: usersReducer}), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;