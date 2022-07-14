export type ThemeStateType = {
    theme: string
}

const initState: ThemeStateType = {
    theme: 'some'
};

const CHANGE_THEME = 'CHANGE_THEME'

export type ActionType = ReturnType<typeof changeThemeAC>

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string) => ({
    type: CHANGE_THEME,
    theme
}) as const;