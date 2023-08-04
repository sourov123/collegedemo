import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/";
export function GetAll(url){ 
    return axios.get(
        API_URL + url
    ).then(response => {
        return response;
    })
    .catch(error => {
      return error;
    });
}

export function Findbyid(url, id, token) {
    return axios.get(
        API_URL + url + "/" + id,
        {
            headers: {
              'Authorization': token
            }
        }
    ).then(response => {
        return response;
    })
    .catch(error => {
      return error;
    });
}