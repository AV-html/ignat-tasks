import {UserType} from '../HW8';


export type ActionType = SortAT | CheckAT

export type SortAT = {
    type: 'sort',
    payload: 'up' | 'down'
}
export type CheckAT = {
    type: 'check',
    payload: number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {

            const copyState = [...state]
            copyState.sort((a, b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            })

            action.payload === 'down' && copyState.reverse()

            return copyState
        }
        case 'check': {
            return state.filter((u) => u.age >= action.payload)
        }
        default:
            return state
    }
}