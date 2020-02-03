/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';

class TitleAsset extends PureComponent {
    render() {
        return (
            <div>
                <h1 className="mt-3">{this.props.title}</h1>
                <hr className="mt-5 mb-5"/>
            </div>
        );
    }
}
export default TitleAsset;