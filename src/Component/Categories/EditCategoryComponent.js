/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import "../../store";

class EditCategoryComponent extends PureComponent {
    render() {
        return (
            <div className="container">

            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        // exemple
        // -----------------------------
         modal: store.logged.showModal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // exemple
        // -----------------------------
        //setModal: () => dispatch({type: 'MODAL'}),
    }
}

export default connect(stateMap, mapDispatchToProps)(EditCategoryComponent);