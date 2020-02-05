/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import TitleAsset from "../Assets/TitleAsset";

class ArticleComponent extends PureComponent {

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <TitleAsset title={"Article"} />
            </div>
        );
    }
}

export default ArticleComponent;