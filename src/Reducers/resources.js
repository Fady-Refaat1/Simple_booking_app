import { ADD_BOOKING, RECEIVE_RESOURCES } from "../Actions/types"

export function resources (state =[],action){
    switch(action.type){
        case RECEIVE_RESOURCES :
            return {...state,...action.resources}
        case ADD_BOOKING:
            const {bookedQuantity,resourceId} = action.formattedBooking
            return {...state,
                [resourceId]: {
                    ...state[resourceId],
                    quantity : state[resourceId].quantity - bookedQuantity
                }
            }
        default:
            return state
    }
}