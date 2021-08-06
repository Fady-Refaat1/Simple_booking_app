import { saveBooking } from "../utils/DATA"
import { hideLoading, showLoading } from "react-redux-loading";
import { addFlashMessage } from "./flashMessage";
import { ADD_BOOKING } from "./types";

export function addBooking (formattedBooking){
    return{
        type:ADD_BOOKING,
        formattedBooking
    }
}

export function handleAddBooking(info){
    return (dispatch)=>{
        dispatch(showLoading())
        return saveBooking(info)
        .then((formattedBooking)=>{
            dispatch(addBooking(formattedBooking))
            console.log(`EMAIL SENT TO admin@admin.com FOR CREATED BOOKING WITH ID ${formattedBooking.id}`)
            dispatch(hideLoading())
            dispatch(addFlashMessage({
                type: 'success',
                text: 'You signed up successfully. Welcome!'
                }))
        })
        .catch((e)=>{
            dispatch(hideLoading())
            console.warn('error in handle add booking') 
            dispatch(addFlashMessage({
                type: 'error',
                text: 'fail'
                }))
        })
    }
}

