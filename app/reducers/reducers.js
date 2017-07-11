import {reducer as notifications} from 'react-notification-system-redux';
import {combineReducers} from 'redux'
import signInReducer from 'signInReducer'

import filterRooms from 'filterRooms'
import loginUser from 'loginUser'
import setRoomsSearch from 'setRoomsSearch'
import setFilters from 'setFilters'

export default  combineReducers( {
    signIn:signInReducer,
    filterRooms:filterRooms,
    loginUser,
    setRoomsSearch,
    notifications,
    setFilters
})
