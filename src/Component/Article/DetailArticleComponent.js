/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import TitleAsset from "../Assets/TitleAsset";

class DetailArticleComponent extends PureComponent {
    render() {
        return (
            <div className="container">
                <TitleAsset title="detail article" />
            </div>
        );
    }
}

export default DetailArticleComponent;
