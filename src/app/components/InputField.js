import React from "react";

export default class InputField extends React.Component {
	render() {
		let style = "form-control";
		if (this.props.status == 0) {
			style = "form-control";
		}
		else if (this.props.status == 1) {
			style = "form-control"
		}
		else if (this.props.status == 2) {
			style = "form-control";
		}
		else if (this.props.status == 3) {
			style = "form-control has-error";
			let val = "";
		}
		return (
			<div className="form-group">
		        <input 
		        	className={style}
		        	type={this.props.type}
		        	placeholder={this.props.placeholder} 
		        	onChange={this.props.eventHandler}
		        	value={val}
		        />
			</div>
		);
	}
}