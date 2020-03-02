/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import '../../CSS/Asset/LoadingComponent.css'
import '../../store'

class LoadingComponent extends PureComponent {
    render() {
        const Loading = () => (
            <div className='loaderComponent'>
                <div className="loader" title="1">
                    <svg
                        version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"
                        width="40%" height="40%" viewBox="0 0 50 50"
                        xmlSpace="preserve">
                        <path
                            fill="#000"
                            d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                            <animateTransform
                                attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"/>
                        </path>
                    </svg>
                </div>
            </div>
        )
        const ShowLoading = () => this.props.loading ? <Loading /> : null
        return (
            <ShowLoading />
        );
    }
}

const stateMap = (store) => {
    return {
        loading: store.logged.showLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // unsetLoading: () => dispatch({type: 'UNSET_LOADING'}),
        // setLoading: () => dispatch({type: 'SET_LOADING'}),
    }
}

export default connect(stateMap, mapDispatchToProps)(LoadingComponent);