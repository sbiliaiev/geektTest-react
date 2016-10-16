import React from "react";

export default class LoginButton extends React.Component {
	render() {
		let style = "";
		let word = "";
		if (this.props.status == 0 || this.props.status == 3) {
			style = "glyphicon glyphicon-arrow-right";
			word = "Login ";
		}
		else if (this.props.status == 1) {
			style = "glyphicon glyphicon-cog";
			word = "";
		}
		else if (this.props.status == 2) {
			style = "glyphicon glyphicon-ok";
			word = "";
		}
		return (
			<button className="btn btn-lg btn-default" type="submit">
	        	{word}
	        	<i className={style}></i>
	        </button>
		);
	}
}