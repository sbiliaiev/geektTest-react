var Backendless = require("backendless");

var APPLICATION_ID = '39957A49-46F9-A413-FF94-43AF60796700';
var SECRET_KEY = 'A80E93A1-4626-EDD8-FFD6-5DB894768800';
var VERSION = 'v1';

Backendless.serverURL = "https://api.backendless.com";
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

import React from "react";
import ReactDOM from "react-dom";

import LoginForm from "./components/LoginForm";

// class App extends React.Components {
// 	render() {
// 		return (
			
// 				<LoginForm />
// 			</div>
// 		);
// 	}
// }

const app = document.getElementById("app");
ReactDOM.render(<LoginForm />, app);
