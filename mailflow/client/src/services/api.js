import axios from 'axios';

const API_URI = 'http://localhost:8000'

const API_MAILFLOW = async (serviceUrlObject, requestData = {}, type) => {
    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}`,
        data: requestData
    })
}

export default API_MAILFLOW;