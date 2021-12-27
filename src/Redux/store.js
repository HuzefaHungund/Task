import { createStore,combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

export const store=()=>{
    const mystore=createStore(combineReducers({movieReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
    return mystore
}