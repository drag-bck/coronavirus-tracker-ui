import { combineReducers } from "redux";
import covidDataReducer from "./covidDataReducer";

const rootReducer = combineReducers({
  covidData: covidDataReducer,
});

export default rootReducer;
