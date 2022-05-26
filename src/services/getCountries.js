import axios, { URL } from '../api/axios'

//? Ülkelerin tümünü getiren servis.
export const getCountries = async () => {
    try {
        const res = await axios.get(URL.all);
        
        if(res.status === 200){
            return res.data
        } 
        else{
            return {
                error: 'Error Data!!!'
            }
        }
        
    } catch (error) {
        console.log('error')
    }
}

//? Parametre olarak girilen isme ait ülkeyi getiren servis.
export const getCountriesName = async (nameCountry) => {
    try {
        const res = await axios.get(`${URL.name}/${nameCountry}`);
        
        if(res.status === 200){
            return res.data
        } 
        else{
            return {
                error: 'Error Data!!!'
            }
        }
       
    } catch (error) {
        console.log('error')
    }
}