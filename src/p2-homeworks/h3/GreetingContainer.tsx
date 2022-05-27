import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}


// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value

        setName(name);
        error && setError(''); // Обнулять ошибку, если она была!
        name || setError('Invalid Value'); // Если имя пустое, то рисовать ошибку

        // if (name) {
        //     setName(name);
        //     error && setError('');
        // } else {
        //     setName('')
        //     setError('Invalid Value');
        // }

    }
    const addUser = () => {
        const newName = name.trim()
        // if (newName) {
        alert(`Hello ${newName}!`)
        addUserCallback(newName)
        setName('')
        // }
        // else {
        //     setError('Invalid Value');
        // }

    }

    const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (name && e.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyHandler={onKeyHandler}
        />
    )
}

export default GreetingContainer
