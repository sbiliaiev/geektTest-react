import React from "react";

export default class InputField extends React.Component {
	render() {
		let style = "form-control";	//0 start, 1 process, 2 success, 3 fail
		switch (this.props.status) {
			case "start":
				style = "form-control";
				break;
			case "process":
				style = "form-control";
				break;
			case "success":
				style = "form-control no-error";
				break;
			case "fail":
				style = "form-control has-error";
				break;
		}
		return (
			<div className="form-group">
		        <input 
		        	className={style}
		        	type={this.props.type}
		        	placeholder={this.props.placeholder} 
		        	onChange={this.props.onChange}
		        />
			</div>
		);
	}
}