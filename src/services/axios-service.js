

const axios = require('axios').default;
class AxiosService {
    postService(url, data) {
        console.log("Axios call");
        return axios({
            method: 'post',
            url: 'http://localhost:4000/employee',  
            data: data
        })
    }
}

module.exports = new AxiosService();