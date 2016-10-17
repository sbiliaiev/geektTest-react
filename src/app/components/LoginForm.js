import React from "react";
import { Provider } from "react-redux";

import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import InputField from "./InputField";

//begin redux
import { createStore } from "redux";

const mainReducer = (state={}, action) => {
	switch (action.type) {
		case "CHANGE_STATUS":
			return state = {...state, status: action.payload};
		case "CHANGE_LOGIN":
			return state = {...state, login: action.payload};
		case "CHANGE_PASSWORD":
			return state = {...state, password: action.payload};
		default:
			return state;
	}		
};

const store = createStore(mainReducer);
store.dispatch({type: "CHANGE_STATUS", payload: "start"});

// store.subscribe(() => {
// 	const state = store.getState();
// });

//end redux

export default class LoginForm extends React.Component {
	constructor() {
		super();
		// this.store = store.getState();
		// this.state = store.dispatch({type: "CHANGE_STATUS", payload: "start"});
		// this.state = {status: "start"};	//0 start, 1 process, 2 success, 3 fail	
		// this.store = createStore(mainReducer);
		// this.store.dispatch({type: "CHANGE_STATUS", payload: "start"});
		// console.log(this.store.getState());
		// this.store.subscribe(this.render);
	}

	handleLoginChange = (e) => {
		store.dispatch({type: "CHANGE_LOGIN", payload: e.target.value});
		// this.store.dispatch({type: "CHANGE_LOGIN", payload: e.target.value});
		// this.setState({login: e.target.value});
		// console.log(this.state);
	}

	handlePasswordChange = (e) => {
		store.dispatch({type: "CHANGE_PASSWORD", payload: e.target.value});
		// this.store.dispatch({type: "CHANGE_PASSWORD", payload: e.target.value});
		// this.setState({password: e.target.value});
		// console.log(this.state);
	}

	userLoggedIn() {
		setTimeout(() => {
			store.dispatch({type: "CHANGE_STATUS", payload: "success"});
			// this.store.dispatch({type: "CHANGE_STATUS", payload: "success"});
			// this.setState({status: "success"});
		}, 2000);
		console.log("success");
	}

	gotError(err) {
		setTimeout(() => {
			store.dispatch({type: "CHANGE_STATUS", payload: "fail"});
			// this.store.dispatch({type: "CHANGE_STATUS", payload: "fail"});
			// this.setState({status: "fail"});
		}, 2000);
		console.log("error message - " + err.message);
		console.log("error code - " + err.statusCode);
	}

	handleSubmit = (e) => {
		// this.setState({status: "process"});
		// this.store.dispatch({type: "CHANGE_STATUS", payload: "process"});
		store.dispatch({type: "CHANGE_STATUS", payload: "process"});
		e.preventDefault();
		// console.log(this.store);
		// const username = this.store.login,
		// 	password = this.store.password,
		// 	remember = false;
		// this.store = store.getState();
		const username = store.getState().login,
			password = store.getState().password,
			remember = false;
		Backendless.UserService.login(username, password, remember, new Backendless.Async(this.userLoggedIn.bind(this), this.gotError.bind(this)));	
	}

	render() {
		this.store = store.getState();
		console.log('render', this.store);
		return (
			<Provider store={store}>
			<div className="container text-center hello">
				<form className="form-signin" onSubmit={this.handleSubmit}>
					<FormHeader />
					<InputField placeholder="Login" type="text" onChange={this.handleLoginChange} />
					<InputField placeholder="Password" type="password" onChange={this.handlePasswordChange} />
					<LoginButton />
				</form>
			</div>
			</Provider>
		);
	}
}