import shortid from 'shortid';
import findIndex from 'lodash/findIndex';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../Actions/types'

export function flashMessages (state = [], action = {}) {
    switch(action.type) {
        case ADD_FLASH_MESSAGE:
        return [
            ...state,
            {
            id: shortid.generate(),
            type: action.message.type,
            text: action.message.text
            }
        ];
        case DELETE_FLASH_MESSAGE:
        const foundIndex = findIndex(state, { id: action.id });
        console.log(foundIndex)
        if (foundIndex >= 0) {
            return [
                ...state.filter((index) => {return index !== foundIndex})
            ];
        }
        return state;

        default: return state;
    }
    }