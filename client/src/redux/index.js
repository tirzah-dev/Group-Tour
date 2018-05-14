import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import travelersReducer from "./travelersRedux";
import tripsReducer from "./tripsRedux";
import activitiesReducer from "./activitiesRedux";

const store = createStore(combineReducers({travelers: travelersReducer, trips: tripsReducer, activities: activitiesReducer}), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;