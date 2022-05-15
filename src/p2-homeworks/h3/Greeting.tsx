import React from 'react'
import s from './Greeting.module.css'
import {ErrorType} from './GreetingContainer';


type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: ErrorType
    totalUsers: number
    onKeyHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyHandler}
) => {
    const isError = error.length > 0;
    const inputClass = isError ? s.error : '';
    
    return (
        <div>
            <input value={name} onKeyDown={onKeyHandler} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} disabled={isError}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
