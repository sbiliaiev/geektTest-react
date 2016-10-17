import React from "react";
import { connect } from "react-redux";

class InputField extends React.Component {
	render() {
		const { status } = this.props.newState;
		let style = "form-control";	//0 start, 1 process, 2 success, 3 fail
		switch (status) {
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


function mapStateToProps (state) {
	return {
		newState: state
	}
}

export default connect(mapStateToProps)(InputField)