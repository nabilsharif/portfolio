import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import React from "react";
import {Router, Route} from "react-router";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export default (
	<Router>
    <Route path="/" component={HomePage} />
    <Route path="/snappa" component={ProjectPage} project='snappa' />
    <Route path="/sticky9" component={ProjectPage} project='sticky9' />
    <Route path="/transferwise" component={ProjectPage} project='transferwise' />
	</Router>
);
