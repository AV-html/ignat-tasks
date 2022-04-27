import React from 'react'
import m from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={m.message}>
            <div className={m.avatar}>
                <img src={props.avatar} alt=" Avatar"/>
            </div>
            <div className={m.body}>
                <div className={m.name}>
                    {props.name}
                </div>
                <div className={m.text}>
                    {props.message}
                    <span/>
                </div>
                <div className={m.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
