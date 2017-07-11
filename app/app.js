
// import React from 'react';
// import ReactDOM from 'react-dom'
import {RoomBookingApp} from 'RoomBookingApp'
// require('font-awesome/css/font-awesome.css');
// var {Provider}=  require('react-redux');
// var actions = require('actions')ƒ
// var store = require('configuer.store').config()

// ReactDOM.render(
// <Provider store={store}  >
//     <RoomBookingApp></RoomBookingApp>
//     </Provider> ,
//     document.getElementById('app')
// )




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
