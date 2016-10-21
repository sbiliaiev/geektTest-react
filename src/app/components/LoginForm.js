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
		// this.store = store.getState();
		// this.state = store.dispatch({type: "CHANGE_STATUS", payload: "start"});
		// this.state = {status: "start"};	//0 start, 1 process, 2 success, 3 fail	
		// this.store = createStore(mainReducer);
		// this.store.dispatch({type: "CHANGE_STATUS", payload: "start"});
		// console.log(this.store.getState());
		// this.store.subscribe(this.render);
	}

	handleLoginChange = (e) => {
		// store.dispatch({type: "CHANGE_LOGIN", payload: e.target.value});
		this.props.changeLogin(e);
		// this.store.dispatch({type: "CHANGE_LOGIN", payload: e.target.value});
		// this.setState({login: e.target.value});
		// console.log(this.state);
	}

	handlePasswordChange = (e) => {
		// store.dispatch({type: "CHANGE_PASSWORD", payload: e.target.value});
		this.props.changePassword(e);
		// this.store.dispatch({type: "CHANGE_PASSWORD", payload: e.target.value});
		// this.setState({password: e.target.value});
		// console.log(this.state);
	}

	userLoggedIn() {
		setTimeout(() => {
			this.props.changeStatus("success");
			// store.dispatch({type: "CHANGE_STATUS", payload: "success"});
			// this.store.dispatch({type: "CHANGE_STATUS", payload: "success"});
			// this.setState({status: "success"});
		}, 2000);
		console.log("success");
	}

	gotError(err) {
		setTimeout(() => {
			this.props.changeStatus("fail");
			// store.dispatch({type: "CHANGE_STATUS", payload: "fail"});
			// this.store.dispatch({type: "CHANGE_STATUS", payload: "fail"});
			// this.setState({status: "fail"});
		}, 2000);
		console.log("error message - " + err.message);
		console.log("error code - " + err.statusCode);
	}

	handleSubmit = (e) => {
		// this.setState({status: "process"});
		// this.store.dispatch({type: "CHANGE_STATUS", payload: "process"});
		// store.dispatch({type: "CHANGE_STATUS", payload: "process"});
		this.props.changeStatus("process");
		e.preventDefault();
		// console.log(this.store);
		// const username = this.store.login,
		// 	password = this.store.password,
		// 	remember = false;
		// this.store = store.getState();
		// const username = store.getState().login,
		// 	password = store.getState().password,
		// 	remember = false;
		// Backendless.UserService.login(username, password, remember, new Backendless.Async(this.userLoggedIn.bind(this), this.gotError.bind(this)));	
	}

	render() {
		console.log('render form', this.props);
		// this.store = store.getState();
		// console.log('render', this.store);
		return (
			<div className="container text-center hello">
				<form className="form-signin" onSubmit={this.handleSubmit}>
					<FormHeader />
					<InputField placeholder="Login" type="text" onChange={this.handleLoginChange} />
					<InputField placeholder="Password" type="password" onChange={this.handlePasswordChange} />
					<LoginButton status={this.status} />
				</form>
			</div>
		);
	}
}

// function mapStateToProps (state) {
// 	return {
// 		newState: state
// 	}
// }

function mapStateToProps(state) {
	return {
		status: state.status,
		login: state.login,
		password: state.password
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