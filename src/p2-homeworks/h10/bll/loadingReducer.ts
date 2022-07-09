export type LoadingState = {
    isLoading: boolean
}

const initState: LoadingState = {
    isLoading: false
}

const TOGGLE_LOADING = 'TOGGLE_LOADING'

export type ActionType = LoadingAT
export type LoadingAT = {
    type: typeof TOGGLE_LOADING
    isLoading: boolean
}

export const loadingReducer = (state: LoadingState = initState, action: ActionType): LoadingState => { // fix any
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingAT => {
    return {
        type: TOGGLE_LOADING,
        isLoading
    } as const
} // fix any