import React from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyHandler}
) => {
    const isEmptyInput = !name.trim();
    const isNotError = !error;

    const inputClass = isNotError ? '' : s.error;

    return (
        <div>
            <input value={name}
                   onKeyDown={onKeyHandler}
                   onChange={setNameCallback}
                   className={inputClass}
                   onBlur={setNameCallback}
            />
            <button onClick={addUser} disabled={isEmptyInput}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
