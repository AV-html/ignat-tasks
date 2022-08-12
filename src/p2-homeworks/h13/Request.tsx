import React, {ChangeEvent, useState} from 'react';
import {nekoCafeBackAPI} from './api';


export function Request() {
    const [isChecked, setIsChecked] = useState(false)
    const [response, setResponse] = useState('')

    const onRequestClick = () => {
        nekoCafeBackAPI.postRequest(isChecked)
            .then((res) => {
                setResponse(JSON.stringify(res.data))
                console.log(res.data);
            })
            .catch((error) => {
                // Как типизировать ошибку?
                setResponse(JSON.stringify(error.response ? error.response.data.errorText : error.message))
                console.log(error);
            })
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    };

    return (
        <div>
            <div>
                {response}
            </div>
            <button onClick={onRequestClick}>Request</button>
            <input
                type={'checkbox'}
                onChange={onChangeHandler}
                checked={isChecked}
            />
        </div>
    );
}