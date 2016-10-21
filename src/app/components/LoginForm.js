import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLogin, changePassword, changeStatus } from "./../actions";

import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import InputField from "./InputField";

class LoginForm extends React.Component {
	constructor() {
		super();
	}

	handleLoginChange = (e) => {
		this.props.changeLogin(e);
	}

	handlePasswordChange = (e) => {
		this.props.changePassword(e);
	}

	userLoggedIn() {
		setTimeout(() => {
			this.props.changeStatus("success");
		}, 2000);
		console.log("success");
	}

	gotError(err) {
		setTimeout(() => {
			this.props.changeStatus("fail");
		}, 2000);
		console.log("error message - " + err.message);
		console.log("error code - " + err.statusCode);
	}

	handleSubmit = (e) => {
		this.props.changeStatus("process");
		e.preventDefault();
		const username = this.props.login,
			password = this.props.password,
			remember = false;
		Backendless.UserService.login(username, password, remember, new Backendless.Async(this.userLoggedIn.bind(this), this.gotError.bind(this)));	
	}

	render() {
		return (
			<div className="container text-center hello">
				<form className="form-signin" onSubmit={this.handleSubmit}>
					<FormHeader />
					<InputField status={this.props.status} placeholder="Login" type="text" onChange={this.handleLoginChange} />
					<InputField status={this.props.status} placeholder="Password" type="password" onChange={this.handlePasswordChange} />
					<LoginButton status={this.props.status} />
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		status: state.loginReducer.status,
		login: state.loginReducer.login,
		password: state.loginReducer.password
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeLogin,
		changePassword,
		changeStatus
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export default connect((state) => state)(LoginForm);