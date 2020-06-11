import Cookies from 'js-cookie';

export function isSigned() {
    const token = Cookies.get('token');

    return (token) ? true: false;
}

export function signIn(token, remember = false) {
    if(remember) {
        Cookies.set('token', token, {expires:999});
    } else {
        Cookies.set('token', token);
    }
}

export function signOut() {
    Cookies.remove('token');
}