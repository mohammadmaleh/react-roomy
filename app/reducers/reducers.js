var moment= require('moment')
var uuid= require('node-uuid')
import {signInToLocalStorage,getUserInformations,signOutFromLocalStorage} from 'localStorageAPI'
export var searchTextReducer = function (state = '',action) {
    switch (action.type){
        case "SET_SEARCH_TEXT":{
            return action.searchText
        }
        default :{
            return  state

        }
    }

}

export var showCompletedReducer = function (state = false,action) {
    switch (action.type){
        case "TOGGLE_SHOW_COMPLETED":{

            return !state
        }
        default :{
            return  state

        }
    }

}

export var todoReducer = function (state = [],action) {
    switch (action.type){
        case "ADD_TODO":{
            return [
                ...state,
            {
                id: uuid(),
                text:action.text,
                completed:false,
                createdAt : moment().startOf('day').unix(),
                completedAt: undefined
            }
            ]
        }
        case "TOGGLE_TODO":{
            return state.map(function (todo) {
                if (todo.id === action.id){
                    var nextCompleted = !todo.completed ;
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt : nextCompleted ? moment().unix() : undefined
                    }
                }
                else
                    return todo
            })
        }
        case "ADD_TODOS":{
            return[
                ...state,
                ...action.todos
         ]
        }
        default :{
            return  state

        }
    }

}

export var signInReducer = function (state = {},action) {

    switch (action.type){
        case "OPEN_MODAL":{
            return  {
                ...state,
                openModal:true
            }
        }
        case "CLOSE_MODAL":{
            return {
                ...state,
                openModal:false
            }

        }
        default:{
            return state
        }
    }
}


export var filterRooms = function(state = {},action){
    switch (action.type){
        case "FILTER_ROOMS":{
            return  {
                ...state,

                    availableTo:action.filterValues.availableTo,
                availableFrom: action.filterValues.availableFrom,
                    capacity:action.filterValues.capacity,
                    city:action.filterValues.city,
                }


        }
        default :{

            return state
        }

    }
}
// let loginUserInitState = getUserInformations()

export var loginUser = function(state = {},action){

    switch (action.type){


        case "LOGIN_USER":{
            let username = action.userData.username;
            let email = action.userData.email;
            let _id = action.userData._id;
            let token = action.userData.token;

            // signInToLocalStorage(username,email,_id,token)
            return  {
                ...state,
                    username,
                    email ,
                    _id,
                    token,
                    loggedIn:true
                }


        }
        case "LOGOUT_USER":{
            return  {
                ...state,
                username:null,
                email :null ,
                _id :null ,
                token:null,
                loggedIn:false
            }

        }
        default :{

            return state
        }

    }

}
export var setRoomsSearch = function(state = [],action){

    switch (action.type){


        case "SET_ROOMS_SEARCH":{


            console.log(action.rooms)
            return  {
                ...state,
                rooms :action.rooms

                }


        }

        default :{

            return state
        }

    }

}
let initialFilters = {
    title:'',
    stars : 0,
    range: {
        min: 100,
        max: 2999,
    },

}
export var setFilters = function(state = initialFilters,action){

    switch (action.type){


        case "SET_FILTERS":{
            return  {
                ...state,
                range:action.filters.filterRange,
                stars:action.filters.filterStars,
                title:action.filters.filterTitle,


            }


        }

        default :{

            return state
        }

    }

}
