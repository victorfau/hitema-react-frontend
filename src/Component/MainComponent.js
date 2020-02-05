/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from 'react-redux';

import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';

import HomeComponent from "./Home/HomeComponent";

import NavBarComponent from "./Nav/NavBarComponent";

import LoginComponent from "./Login/LoginComponent";

import UsersComponent from "./Users/UsersComponent";
import DetailUserComponent from "./Users/DetailUserComponent";

import ArticleComponent from "./Article/ArticleComponent";
import DetailArticleComponent from "./Article/DetailArticleComponent";

import CategorieComponent from "./Categories/CategorieComponent";
import DetailCategoryComponent from "./Categories/DetailCategoryComponent";

const stateMap = (store) => {
    return {
        login: store.logged.isLogged,
        modal: store.logged.showModal
    };
};

class MainComponent extends PureComponent {

    render() {
        return (
            <div className="MainComponent">
                <NotificationContainer/>
                {this.props.modal ? <LoginComponent /> : null}
                <BrowserRouter>
                    <NavBarComponent/>
                    <Route exact path="/" component={HomeComponent}/>

                    <Route exact path="/users" component={UsersComponent}/>
                    <Route exact path="/users/:id" component={DetailUserComponent}/>

                    <Route exact path="/article" component={ArticleComponent}/>
                    <Route exact path="/article/:id" component={DetailArticleComponent}/>

                    <Route exact path="/category" component={CategorieComponent}/>
                    <Route exact path="/category/:id" component={DetailCategoryComponent}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(stateMap)(MainComponent);
