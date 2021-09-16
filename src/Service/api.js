import axios from 'axios';

const url = 'http://localhost:3003/dishes';

export const getdishes = async(id) => {
    id=id || ''
    var response = await axios.get(`${url}/${id}`);
    return response;
}

export const adddishes = async (user) => {
    return axios.post(`${url}`, user);
}

export const editdishes = async (id , user) => {
    return axios.put(`${url}/${id}`, user);
}