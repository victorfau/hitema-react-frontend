import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import '../../store'

import TitleAsset from "../Assets/TitleAsset"
import {Link} from "react-router-dom";
import ArticleService from "../../Service/ArticleService";
import {NotificationManager} from "react-notifications";

class ArticleComponent extends PureComponent {

    state = {
        article: []
    }

    async handleDelete(id) {
        let response = await ArticleService.delete(id);
        if (response.ok) {
            let datas = [...this.state.article];
            let index = datas.findIndex(article => article.id === id);
            datas.splice(index, 1);
            this.setState({article: datas});
            NotificationManager.error('L\'article est correctement supprimé');
        }
    }

    async componentDidMount() {
        this.props.setLoader()
        let response = await ArticleService.list()
        if (response.ok){
            let list = await response.json()
            console.log(list.data)
            this.setState({article: list.data})
        }
        this.props.unsetLoader()
    }

    render() {

        const List = () => (
            <tbody>
            {this.state.article.map((element, key) => (
                <tr key={key}>
                    <td>{element.name}</td>
                    <td>Auteur</td>
                    <td>{new Date(element.modifiedAt.timestamp * 1000).toDateString()}</td>
                    {this.props.isAdmin ?
                        <td>
                            <button onClick={() => this.handleDelete(element.id)} className="btn btn-danger">
                                DELETE
                            </button>
                            <Link to={`/article/${element.id}`} className="btn btn-info">DETAIL</Link>
                            <Link to={'/article/' + element.id} className={"btn btn-success"}>
                                lire la suite
                            </Link>
                        </td>
                    :
                        <td>
                            <Link
                                to={'/article/' + element.id} className={"btn btn-success"}>
                            lire la suite
                        </Link>
                        </td>
                    }
                </tr>
            ))}
            </tbody>
        )

        return (
            <div className="container">
                <TitleAsset title={`Articles`} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Dernière modification</th>

                                <th>Actions</th>
                        </tr>
                    </thead>
                    <List />
                </table>
            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        isAdmin: store.logged.isAdmin,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        unsetLoader: () => dispatch({type: 'UNSET_LOADER'}),
        setLoader: () => dispatch({type: 'SET_LOADER'}),
    }
}

export default connect(stateMap, mapDispatchToProps)(ArticleComponent);