/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import UserService from "../../Service/UserService";

class CategorieComponent extends PureComponent {

    state = {
        categories: [],
    }

    async componentDidMount() {
        let response = await UserService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({users: data.data})

        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default CategorieComponent;

