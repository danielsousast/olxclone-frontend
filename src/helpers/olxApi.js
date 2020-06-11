
import Cookies from 'js-cookie';
import qs from 'qs';
import api from '../services/api';


export async function login(email, password) {
        const response = await api.post(
            '/user/signin',
            {email, password}
        )

        return response;
}

export async function register(body) {
    const response = await api.post(
        '/user/signup',
        body
    )

    return response;
}

