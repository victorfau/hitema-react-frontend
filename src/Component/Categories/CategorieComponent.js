/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import CategorieService from "../../Service/CategoriesrService";
import TitleAsset from "../Assets/TitleAsset";
import {Link} from "react-router-dom";
import UserService from "../../Service/UserService";
import {NotificationManager} from "react-notifications";

class CategorieComponent extends PureComponent {

    state = {
        categories: [],
    }

    // fonction de suppression
    async handleDelete(id) {
        let response = await UserService.delete(id);
        if (response.ok) {
            let datas = [...this.state.categories];
            let index = datas.findIndex(users => users.id === id);
            datas.splice(index, 1);
            this.setState({users: datas});
            NotificationManager.error('Utilisateur correctement supprimé');
        }
    }

    async componentDidMount() {
        let response = await CategorieService.list();
        console.log(response)
        if (response.ok) {
            let data = await response.json();
            this.setState({categories: data.data})

        }
    }

    render() {

        /**
         * @return le body du tableau avec les items
         */
        const List = () => (
            <tbody>
            {
                this.state.categories.map((element, key) => (
                    <tr key={key}>
                        <td>{element.name}</td>
                        <td>5</td>
                        <td>
                            <button onClick={() => this.handleDelete(element.id)} className="btn btn-danger">
                                DELETE
                            </button>
                            <Link to={`/category/${element.id}`} className="btn btn-info">DETAIL</Link>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        );
        const NoItem = () => (
            <tbody>
            <tr>
                <td/>
                <td><i>No Item found</i></td>
                <td/>
            </tr>
            </tbody>
        )


        return (
            <div className="container">
                <TitleAsset title={"Catégories"}/>

                <table className='table'>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Nombre d'article</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    {
                        (this.state.categories.length > 0) ? <List/> : <NoItem/>
                    }

                </table>
            </div>
        );
    }
}

export default CategorieComponent;

