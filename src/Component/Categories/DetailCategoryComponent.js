/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import {Card} from "react-bootstrap";

import CategorieService from "../../Service/CategoriesrService";

import TitleAsset from "../Assets/TitleAsset";

import '../../CSS/Users/Details.css'
import {Link} from "react-router-dom";

class DetailUserComponent extends PureComponent {

    state = {
        auth: {
            auth: false,
            role: 0
        },
        category: {}
    };

    async componentDidMount() {
        const {match: {params}} = this.props;
        let response = await CategorieService.see(params.id);
        if (response.ok) {
            let data = await response.json();
            this.setState({category: data.data})
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    <TitleAsset title={this.state.category.name}/>
                </div>
                <div>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://fakeimg.pl/440/320/"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Link className="btn btn-info" to={"/"}>
                                Lire l'article
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        );
    }
}

// todo mettre ici les articles
export default DetailUserComponent;