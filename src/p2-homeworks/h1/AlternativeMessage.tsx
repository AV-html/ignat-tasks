import React from 'react'
import m from "./AlternativeMessage.module.css";

type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function AlternativeMessage(props: AlternativeMessagePropsType) {
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

export default AlternativeMessage
