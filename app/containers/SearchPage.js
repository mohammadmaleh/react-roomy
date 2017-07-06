import React, { Component } from 'react';
import RoomItem from 'RoomItem'
import {getAllRooms} from 'roomsAPI'
import {connect} from 'react-redux'
import FilterDiv from 'FilterDiv'
import {subscribe} from 'redux-subscriber';



class SearchPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchedRooms:null,
            searchedRoomsList:[],
            filteredRoomList:[]

        } ;
        subscribe('setFilters', state => {
                let {searchedRoomsList} = this.state;
                let filteredRoomList = searchedRoomsList.filter((room)=>{
                    return (room.title.indexOf(state.setFilters.title) > -1) && (room.newPrice > state.setFilters.range.min && room.newPrice < state.setFilters.range.max) && room.stars >=  state.setFilters.stars;
                })

                filteredRoomList = filteredRoomList.map((room)=>{
                    return <RoomItem key={room._id} roomObject={room}/> })
                this.setState({filteredRoomList: filteredRoomList});
            });

    }

    componentDidMount(){
        let searchItem = this.props.filterRooms


        getAllRooms(searchItem).then((res)=>{
                let rooms = res.data.rooms
                let {filteredRoomList} = this.state;
                if (rooms.length > 0){
                    this.setState({searchedRoomsList: rooms});

                    filteredRoomList = rooms.map((room)=>{
                        return <RoomItem key={room._id} roomObject={room}/> })
                    this.setState({filteredRoomList: filteredRoomList});
                }
            })
        ;
    }

    render(){
        const seachedRooms = this.state.searchedRoomsList;

        if (seachedRooms) {
            let {filteredRoomList} = this.state
            return <div className="row">
                <div className="column large-3">
                    <FilterDiv></FilterDiv>
                </div>
                <div className="column large-9">
                    <div> {filteredRoomList} </div>
                </div>
            </div>
        }

        return <div> Loading...</div>;

    }

}
export default connect(
    (state) => {
        return state;
    }
)(SearchPage);;