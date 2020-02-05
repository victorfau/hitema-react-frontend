import React, {PureComponent} from 'react';
import MainComponent from "./Component/MainComponent";
import {createStore} from "redux";
import GlobalReducer from './Reducer/GlobalReducer'
import {Provider} from "react-redux";

const store = createStore(
    GlobalReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <MainComponent/>
            </Provider>
        );
    }
}

export default App;
