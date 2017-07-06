import React,{Component} from'react'
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux'
const base64_arraybuffer = require('base64-arraybuffer')

class RoomItem extends Component{
    constructor(props){
        super(props);
        this.room =  {
            title : 'Room in istanbul',
            description:'saSAsas',
            mainImage : 'https://st.hzcdn.com/fimgs/e7a192a501fdd299_6059-w500-h400-b0-p0--.jpg',
            stars:5,
            reviewsCount:18,
            rate:9.3,
            oldPrice:1200,
            newPrice:1000,
            offersWifi:true ,
            city:'istanbul',
            street:'caglayan',
            capacity : 2 ,
            favorite:true,
            size:89,
            equipment:['','','','']


        }
    }
    hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }
    render(){

        let {roomObject} = this.props;
        // let base64String = btoa(String.fromCharCode(...new Uint8Array(roomObject.mainImage.data.data)));
        let image =base64_arraybuffer.encode(roomObject.mainImage.data.data)
        return(
            <div className="row room-item ">
                <div className="column large-3 room-item-image" >
                    <img src={"data:image/png;base64,"+image}/>
                </div>
                <div className=" column large-6 room-item-main">
                    <p className="room-item-title">
                        {roomObject.title}
                    </p>

                    <div className="room-item-stars">
                        <StarRatingComponent
                            name={'rate'+roomObject._id}
                            starCount={5}
                            value={1}
                        />

                    </div>
                    <div className="room-item-location">
                        {roomObject.city}, {roomObject.street}
                    </div>
                    <div>
                        has a wifi{roomObject.offersWifi}
                    </div>
                </div>
                <div className="column large-3 room-item-side">
                    <div className="room-item-rate">
                        <p>Excellent <b>{roomObject.rate}</b></p>
                    </div>
                    <div className="room-item-reviews">
                        {roomObject.reviewsCount} reviews
                    </div>
                    <div className='room-item-price'>
                        <div className="room-item-old-price">
                            {roomObject.oldPrice}

                        </div>
                        <div className="room-item-new-price">
                            <b>{roomObject.newPrice}</b> TL

                        </div>
                    </div>


                </div>

            </div>

        )
    }
}
export default connect(
    (state) => {
        return state;
    }
)(RoomItem);