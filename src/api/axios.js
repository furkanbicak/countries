import axios from 'axios'

export const baseURL = 'https://restcountries.com/v2'
export default axios.create({ baseURL });

export const URL = {
    all     :   '/all',
    name    :   '/name'
}

  