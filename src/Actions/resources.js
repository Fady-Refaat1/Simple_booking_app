import { RECEIVE_RESOURCES } from "./types"

export function receiveResources (resources){
    return{
        type:RECEIVE_RESOURCES,
        resources,
    }
}
