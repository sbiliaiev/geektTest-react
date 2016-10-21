export default function(state = {}, action) {
	switch (action.type) {
		case "CHANGE_STATUS":
			return {...state, status: action.payload};
		case "CHANGE_LOGIN":
			return {...state, login: action.payload};
		case "CHANGE_PASSWORD":
			return {...state, password: action.payload};
		default:
			return state;
	}		
}
