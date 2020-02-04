import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';

import HomeComponent from "./Component/Home/HomeComponent";

import UsersComponent from "./Component/Users/UsersComponent";
import DetailUserComponent from "./Component/Users/DetailUserComponent";

import NavBarComponent from "./Component/Nav/NavBarComponent";




class App extends PureComponent{

    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <BrowserRouter>
                    <NavBarComponent />
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/users" component={UsersComponent} />
                    <Route exact path="/users/:id" component={DetailUserComponent}/>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
