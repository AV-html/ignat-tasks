import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

type FilterType = 'all' | 'sort-up' | 'sort-down' | 'check18+';

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)
    const [filter, setFilter] = useState<FilterType>('all')

    // need to fix any
    const finalPeople = people.map((p) => (
        <li key={p._id}>
            <span>{p.name + ' ' + p.age}</span>
        </li>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
        setFilter('sort-up')
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
        setFilter('sort-down')
    }
    const check = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
        setFilter('check18+')
    }

    const styleBackground = {
        backgroundColor: '#90ee90'
    }


    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <ul>
                {finalPeople}
            </ul>


            <div>
                <SuperButton style={filter === 'sort-up' ? styleBackground : {}} onClick={sortUp}>
                    sort up
                </SuperButton>
                <SuperButton style={filter === 'sort-down' ? styleBackground : {}} onClick={sortDown}>
                    sort down
                </SuperButton>
                <SuperButton style={filter === 'check18+' ? styleBackground : {}} onClick={check}>
                    check 18
                </SuperButton>

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
