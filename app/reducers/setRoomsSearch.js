/**
 * Created by mohammadmaleh on 11/07/2017.
 */
export default  function(state = [],action){

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
