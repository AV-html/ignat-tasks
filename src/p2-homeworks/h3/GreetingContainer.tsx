import React, {useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: Array<string>
    addUserCallback: (name: string) => void
}

export type ErrorType = 'error' | '';

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<ErrorType>('')

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);

        if (e.currentTarget.value.length) {
            setError('');
        } else {
            setError('error');
        }

    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`) // need to fix
        setName('')
    }

    const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
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
