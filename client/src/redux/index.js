import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import travelersReducer from "./travelersRedux";
import tripsReducer from "./tripsRedux";

const store = createStore(combineReducers({travelers: travelersReducer, trips: tripsReducer}), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;