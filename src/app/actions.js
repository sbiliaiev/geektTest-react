export function changeLogin(e) {
	// store.dispatch({type: "CHANGE_LOGIN", payload: e.target.value});
	return {type: "CHANGE_LOGIN", payload: e.target.value};
}

export function changePassword(e) {
	// store.dispatch({type: "CHANGE_PASSWORD", payload: e.target.value});
	return {type: "CHANGE_PASSWORD", payload: e.target.value};
}

export function changeStatus(status) {
	// store.dispatch({type: "CHANGE_STATUS", payload: status});
	return {type: "CHANGE_STATUS", payload: status};
}