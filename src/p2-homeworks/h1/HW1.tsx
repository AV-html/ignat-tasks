import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const alternativeMessageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Gacha Life',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quod consectetur dolors. Last symbol! ->',
    time: '21:30',
}
const alternativeMessageData2 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Gacha Life',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Test text!',
    time: '21:31',
}
const alternativeMessageData3 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Gacha Life',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Goodbye!',
    time: '21:33',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}

            {/* Изменение border-radius, в зависимости от расположения сообщений: первое, последнее или между.
            Эксперементировал с редкими псевдоклассами, типа only-child

            Не учтено: ширина поста может быть разная, если текст небольшой
            */}
            <div>
                <AlternativeMessage
                    avatar={alternativeMessageData1.avatar}
                    name={alternativeMessageData1.name}
                    message={alternativeMessageData1.message}
                    time={alternativeMessageData1.time}
                />
                <AlternativeMessage
                    avatar={alternativeMessageData2.avatar}
                    name={alternativeMessageData2.name}
                    message={alternativeMessageData2.message}
                    time={alternativeMessageData2.time}
                />
                <AlternativeMessage
                    avatar={alternativeMessageData3.avatar}
                    name={alternativeMessageData3.name}
                    message={alternativeMessageData3.message}
                    time={alternativeMessageData3.time}
                />
            </div>

            <hr/>
        </div>
    )
}

export default HW1
