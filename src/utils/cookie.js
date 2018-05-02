import Cookies from 'js-cookie';

export const remove = key => Cookies.remove(key);

export const set = (key, value, options) => Cookies.set(key, value, options);

export const get = key => Cookies.get(key);
