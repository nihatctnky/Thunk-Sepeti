import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    restaurantReducer,
    cartReducer,
})
//  apply middlewar herhangi arayazılımı redux dahil etmeye yarar burada thunk dahil etmek için kullanırız
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

