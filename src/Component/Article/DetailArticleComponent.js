/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import '../../store'

import ArticleService from '../../Service/ArticleService'

import TitleAsset from "../Assets/TitleAsset"
import LoadingComponent from "../Assets/LoadingComponent"

import '../../CSS/Articles/DetailArticleComponent.css'

class DetailArticleComponent extends PureComponent {

    state = {
        article: {
            createdAt: {},
            modifiedAt: {}
        }
    }

    async componentDidMount() {
        this.props.setLoading()
        let response = await ArticleService.see(this.props.match.params.id)
        if (response.ok) {
            let article = await response.json()
            console.log(article)
            this.setState({article: article.data})
            console.log(new Date(this.state.article.createdAt.timestamp))
            this.props.unsetLoading()
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <TitleAsset title={this.state.article.name}/>
                </div>
                <div className='articleContainer'>
                    <div>
                        <img src={this.state.article.img}/>
                    </div>
                    <LoadingComponent/>
                    <div>
                        <p>
                            {this.state.article.content}
                        </p>
                    </div>

                    <hr/>
                    <div className='articleDown'>
                        <div>
                            <p>
                                <i>créé le {new Date(this.state.article.createdAt.timestamp * 1000).toDateString()}</i>
                            </p>
                            <p>
                                <i>Modifié
                                    le {new Date(this.state.article.modifiedAt.timestamp * 1000).toDateString()}</i>
                            </p>
                        </div>
                        <div>
                            <p>
                                <i>Author : todo</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        // exemple
        // -----------------------------
        // modal: store.logged.showModal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        unsetLoading: () => dispatch({type: 'UNSET_LOADING'}),
        setLoading: () => dispatch({type: 'SET_LOADING'}),
    }
}

export default connect(stateMap, mapDispatchToProps)(DetailArticleComponent);