import React from "react";

import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import InputField from "./InputField";

export default class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {status: "start"};	//0 start, 1 process, 2 success, 3 fail
	}

	handleLoginChange = (e) => {
		this.setState({login: e.target.value});
		// console.log(this.state);
	}

	handlePasswordChange = (e) => {
		this.setState({password: e.target.value});
		// console.log(this.state);
	}

	userLoggedIn() {
		setTimeout(() => {
			this.setState({status: "success"});
		}, 2000);
		console.log("success");
	}

	gotError(err) {
		setTimeout(() => {
			this.setState({status: "fail"});
		}, 2000);
		console.log("error message - " + err.message);
		console.log("error code - " + err.statusCode);
	}

	handleSubmit = (e) => {
		this.setState({status: "process"});
		e.preventDefault();
		console.log(this.state);
		const username = this.state.login,
			password = this.state.password,
			remember = false;
		Backendless.UserService.login(username, password, remember, new Backendless.Async(this.userLoggedIn.bind(this), this.gotError.bind(this)));	
	}

	render() {
		return (
			<div className="container text-center hello">
				<form className="form-signin" onSubmit={this.handleSubmit}>
					<FormHeader />
					<InputField placeholder="Login" status={this.state.status} type="text" onChange={this.handleLoginChange} />
					<InputField placeholder="Password" status={this.state.status} type="password" onChange={this.handlePasswordChange} />
					<LoginButton status={this.state.status} />
				</form>
			</div>
		);
	}
}