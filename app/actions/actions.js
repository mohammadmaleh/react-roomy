
export const openModal = ()=>{
    return{
        type:'OPEN_MODAL'
    }
}
export const closeModal = ()=>{
    return{
        type:'CLOSE_MODAL'
    }
}
export const FilterRooms = (filterValues)=> {
    return {
        type:'FILTER_ROOMS',
        filterValues
    }
}
export const loginUser = (userData)=> {

    return {
        type:'LOGIN_USER',
        userData
    }
}
export const logoutUser = ()=> {

    return {
        type:'LOGOUT_USER'
    }
}

export const setRoomsSearch = (rooms)=> {

    return {
        type:'SET_ROOMS_SEARCH',
        rooms
    }
}
export const setFilters = (filters)=>{
    return{
        type:'SET_FILTERS',
        filters
    }
}