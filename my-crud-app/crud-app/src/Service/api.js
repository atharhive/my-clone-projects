import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';

const API = {
    getUsers: async (id) => {
        id = id || '';
        return await axios.get(`${usersUrl}/${id}`);
    },
    addUser: async (user) => {
        return await axios.post(`${usersUrl}/add`, user);
    },
    deleteUser: async (id) => {
        return await axios.delete(`${usersUrl}/${id}`);
    },
    editUser: async (id, user) => {
        return await axios.put(`${usersUrl}/${id}`, user);
    }
};

export { API };