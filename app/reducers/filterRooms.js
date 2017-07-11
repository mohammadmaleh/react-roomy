/**
 * Created by mohammadmaleh on 11/07/2017.
 */
export default  function(state = {},action){
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
