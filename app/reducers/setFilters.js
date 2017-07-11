/**
 * Created by mohammadmaleh on 11/07/2017.
 */
let initialFilters = {
    title:'',
    stars : 0,
    range: {
        min: 100,
        max: 2999,
    },

}
export default function(state = initialFilters,action){

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