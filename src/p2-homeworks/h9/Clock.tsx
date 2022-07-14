import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()

        const id: number = window.setInterval(() => {
            setDate((date) => {
                return new Date(date.getTime() + 1000)
            })
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    // const correctTime = (time: number) => {
    //     return time < 10 ? '0' + time : time
    //     // return ('0' + time).slice(-2)
    // }
    // const stringTime = `${correctTime(date.getHours())}:${correctTime(date.getMinutes())}:${correctTime(date.getSeconds())}` // fix with date
    // const stringDate = `${correctTime(date.getDate())}.${correctTime(date.getMonth() + 1)}.${correctTime(date.getFullYear())}` // fix with date


    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString() // fix with date


    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div style={{ position: 'absolute' }}>
                    {stringDate}
                </div>
            )}

            <div style={{ marginTop: '1.5em' }}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
