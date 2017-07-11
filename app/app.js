import RoomBookingApp from 'RoomBookingApp'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configuer.store';

async function init() {
    const store = await configureStore()

    ReactDOM.render(
        <Provider store={store}>
            <RoomBookingApp></RoomBookingApp>
        </Provider>,
        document.getElementById('app')
    );
}
require("font-awesome-sass-loader");
init();
require('style-loader!css-loader!sass-loader!./styles/app.scss')
