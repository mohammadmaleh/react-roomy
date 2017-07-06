import axios from 'axios'
const baseUrl = process.env.NODE_ENV ? '/':'http://localhost:3000'
export const saveRoom = (roomItem)=>{
    return axios({
        method: 'post',
        url: baseUrl + '/rooms',
        data: roomItem,
        headers: { 'content-type': 'multipart/form-data' }
    });

}
export const getAllRooms = (searchItem)=>{
    console.log(searchItem,'fromapi')
    return axios({
        method: 'post',
        url: baseUrl + '/searchRooms',
        data: searchItem
    });

}





