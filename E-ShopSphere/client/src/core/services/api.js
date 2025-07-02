import axios from 'axios';

const url = 'http://localhost:8000';

const callApi = async (apiCall, errorMessage) => {
    try {
        return await apiCall();
    } catch (error) {
        console.error(errorMessage, error);
        return null; // Or throw an error, depending on desired error handling
    }
};

export const authenticateLogin = async (user) => {
    return callApi(() => axios.post(`${url}/login`, user), 'Error while calling login API: ');
};

export const authenticateSignup = async (user) => {
    return callApi(() => axios.post(`${url}/signup`, user), 'Error while calling Signup API: ');
};

export const getProductById = async (id) => {
    return callApi(() => axios.get(`${url}/product/${id}`), 'Error while getting product by id response');
};

export const payUsingPaytm = async (data) => {
    return callApi(() => axios.post(`${url}/payment`, data), 'Error while calling payment API: ');
};