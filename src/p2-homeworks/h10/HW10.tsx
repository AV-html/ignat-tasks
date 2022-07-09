import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC, LoadingState} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import loader from './spinner.gif'

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, LoadingState>((rootState) => rootState.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
        // console.log('loading...')
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };
    

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div>
                        <img src={loader} alt="" width={150}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
