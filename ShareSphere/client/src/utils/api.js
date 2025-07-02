import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const shareFile = async (data) => {
    const response = await axios.post(`${API_URI}/upload`, data);
    return response.data;
};