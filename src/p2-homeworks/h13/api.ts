import axios from 'axios';

type PostResponseType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const nekoCafeBackAPI = {
    postRequest(success: boolean) {
        return instance.post<PostResponseType>('auth/test', {success})
    }
}