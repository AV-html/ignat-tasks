import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC, ThemeStateType} from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, ThemeStateType>((state) => state.theme)
    const dispatch = useDispatch()

    function onSelectTheme(theme: string) {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>


            <div>
                <SuperSelect value={theme} onChangeOption={onSelectTheme} options={themes}/>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
