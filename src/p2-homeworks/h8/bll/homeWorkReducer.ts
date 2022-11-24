import {UserType} from "../HW8";

type ActionType = {
    type: 'sort'
    payload: 'up' | 'down'
} | {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            if (action.payload === 'up') {
                return stateCopy.sort((a, b) => a.age - b.age)
            } else if (action.payload === 'down') {
                return stateCopy.sort((a, b) => b.age - a.age)
            }
            return stateCopy
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}