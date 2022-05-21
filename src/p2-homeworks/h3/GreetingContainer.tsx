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
        const name = e.currentTarget.value.trim()


        if (name) {
            setName(name);
            error && setError(''); // Обнулять ошибку, если она была!
        } else {
            name && setName('')
            setError('error');
        }

    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
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
