import { getResources } from "../utils/DATA"
import { receiveResources } from "./resources"
import { hideLoading, showLoading } from "react-redux-loading";

export function handleIntilData (){
    return (dispatch) =>{
        dispatch(showLoading())
        getResources()
        .then((resources)=>{
            dispatch(receiveResources(resources))
            dispatch(hideLoading())
        })
    }
}