import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Writers from "./Writers/Writers";

import NotFound from './Errors/404'

export default class extends Component {
    state = {
        writers: []
    };

    async componentDidMount() {
        const writers = await (await fetch(
            "http://localhost:3030/writers"
        )).json();

        this.setState({ writers });
    }

    render() {
        const { writers } = this.state;

        return (
            <BrowserRouter>
                <Fragment>
                    <ul>
                        <li>
                            <Link to="/"> home </Link>
                        </li>
                        <li>
                            <Link to="/writers"> writer </Link>
                        </li>
                    </ul>
                    <hr />

                    <Switch>
                        <Route path="/" exact render={() => <div>Home</div>} />
                        <Route
                            path="/writers"
                            render={props => (
                                <Writers {...props} writers={writers} />
                            )}
                        />

                        <Route component={NotFound}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}
