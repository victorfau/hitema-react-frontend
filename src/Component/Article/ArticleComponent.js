import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import '../../store'

import TitleAsset from "../Assets/TitleAsset"

class ArticleComponent extends PureComponent {
    componentDidMount() {
        this.props.setLoader()
        this.props.unsetLoader()
    }

    render() {
        return (
            <div>
                <TitleAsset title={`Articles`} />
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
        unsetLoader: () => dispatch({type: 'UNSET_LOADER'}),
        setLoader: () => dispatch({type: 'SET_LOADER'}),
    }
}

export default connect(stateMap, mapDispatchToProps)(ArticleComponent);