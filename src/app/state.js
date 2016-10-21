//begin redux
import { createStore, combineReducers } from "redux";
// import { loginReducer } from "./reducers/loginReducer";
import * as reducers from "./reducers";
// console.log(reducers);

const reducer = combineReducers(reducers);
// const reducer = combineReducers({
// 	loginReducer,
// });
// console.dir(reducer);



// const store = createStore(loginReducer);
// store.dispatch({type: "CHANGE_STATUS", payload: "start"});
const store = createStore(reducer);
console.log(store.getState());

export default store;

// store.subscribe(() => {
// 	const state = store.getState();
// });

//end redux