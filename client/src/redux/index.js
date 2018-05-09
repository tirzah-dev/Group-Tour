import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import travelersReducer from "./travelersRedux";

const store = createStore(combineReducers({travelers: travelersReducer}), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;