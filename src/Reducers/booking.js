import { ADD_BOOKING } from "../Actions/types"

export function booking (state=[],action){
    switch(action.type){
        case ADD_BOOKING :
            return state.concat(action.formattedBooking)
        default:
            return state
    }
}