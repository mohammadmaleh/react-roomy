// import {compose,combineReducers, applyMiddleware, createStore} from 'redux'
// var {todoReducer,showCompletedReducer,searchTextReducer,signInReducer,filterRooms,loginUser,setRoomsSearch} = require('reducers')
// import {reducer as notifications} from 'react-notification-system-redux';
// import {persistStore, autoRehydrate} from 'redux-persist'
// export var config = ()=>{
//
//     var reducer = combineReducers( {
//         searchText:searchTextReducer,
//         showCompleted:showCompletedReducer,
//         todos:todoReducer,
//         signIn:signInReducer,
//         filterRooms:filterRooms,
//         loginUser,
//         setRoomsSearch,
//         notifications,
//     })
//     // var store = createStore(reducer ,undefined , compose(
//     //     window.devToolsExtension ? window.devToolsExtension():f=>f,
//     //     autoRehydrate()
//     // ))
//     const store = createStore(reducer, undefined,
//             autoRehydrate())
//
//
//     persistStore(store)
//     return store
// }
import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { localStorage } from 'redux-persist/storages';
import initSubscriber from 'redux-subscriber';
var {todoReducer,showCompletedReducer,searchTextReducer,signInReducer,filterRooms,loginUser,setRoomsSearch,setFilters} = require('reducers')
import {reducer as notifications} from 'react-notification-system-redux';
    var reducer = combineReducers( {
        searchText:searchTextReducer,
        showCompleted:showCompletedReducer,
        todos:todoReducer,
        signIn:signInReducer,
        filterRooms:filterRooms,
        loginUser,
        setRoomsSearch,
        notifications,
        setFilters
    })
export default function configureStore() {
    const middlewares = [];

    return new Promise((resolve, reject) => {
        try {
            const store = createStore(
                reducer,
                undefined,
                compose(
                    autoRehydrate(),
                    applyMiddleware(...middlewares),

                ),
            );

            persistStore(
                store,
                { storage: localStorage },
                () => resolve(store)
            );
            initSubscriber(store);
        } catch (e) {
            reject(e);
        }
    });
}
