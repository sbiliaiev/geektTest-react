export function changeLogin(e) {
	return {type: "CHANGE_LOGIN", payload: e.target.value};
}

export function changePassword(e) {
	return {type: "CHANGE_PASSWORD", payload: e.target.value};
}

export function changeStatus(status) {
	return {type: "CHANGE_STATUS", payload: status};
}