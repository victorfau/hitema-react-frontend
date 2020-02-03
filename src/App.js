import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import UsersComponent from "./Component/Users/UsersComponent";
import HomeComponent from "./Component/Home/HomeComponent";
import NavBarComponent from "./Component/Nav/NavBarComponent";

import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from "react-notifications";
import DetailUserComponent from "./Component/Users/DetailUserComponent";


function App() {
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

export default App;
