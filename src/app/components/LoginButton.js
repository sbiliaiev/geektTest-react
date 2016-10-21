import React from "react";

export default class LoginButton extends React.Component {
	render() {
		const { status } = this.props;
		let style = "",
			word = "";
		switch (status) {
			case "start":
				style = "glyphicon glyphicon-arrow-right";
				word = "Login ";
				break;
			case "process":
				style = "glyphicon glyphicon-cog";
				word = "";
				break;
			case "success":
				style = "glyphicon glyphicon-ok";
				word = "";
				break;
			case "fail":
				style = "glyphicon glyphicon-arrow-right";
				word = "Login ";
				break;
		}
		return (
			<button className="btn btn-lg btn-default" type="submit">
	        	{word}
	        	<i className={style}></i>
	        </button>
		);
	}
}
