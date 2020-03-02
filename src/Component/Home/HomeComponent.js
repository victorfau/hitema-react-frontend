/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {Component} from 'react';

import TitleAsset from "../Assets/TitleAsset";
import ArticleService from "../../Service/ArticleService";

import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../store'
import '../../CSS/Home/homeComponent.css'
import LoadingComponent from "../Assets/LoadingComponent";


class HomeComponent extends Component {

    state = {
        articles: []
    }

    async componentDidMount() {
        this.props.setLoading()
        let response = await ArticleService.home();
        if (response.ok) {
            let data = await response.json();
            this.setState({articles: data.data})
            this.props.unsetLoading()
        }
    }


    render() {

        const Item = () => (
            <div className="homeContainer">
                {
                    this.state.articles.map((element, key) => (
                        <Card className="homeCard" bg="light" key={key}>
                            <Card.Img variant="top" src={element.img}/>
                            <Card.Header>
                                {element.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {element.content}
                                </Card.Text>
                            </Card.Body>
                            <Link to={'/article/' + element.id} className={"btn btn-success"}>
                                lire la suite
                            </Link>
                        </Card>

                    ))
                }
            </div>
        )

        return (
            <div>
                <div className="container">
                    <TitleAsset title="Home"/>
                </div>
                <div className="homeContent">
                    <LoadingComponent/>
                    <Item/>
                </div>
            </div>
        )
    }
}

const stateMap = (store) => {
    return {
        loading: store.logged.showLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        unsetLoading: () => dispatch({type: 'UNSET_LOADING'}),
        setLoading: () => dispatch({type: 'SET_LOADING'}),
    }
}

export default connect(stateMap, mapDispatchToProps)(HomeComponent);