

const axios = require('axios').default;
class AxiosService {
    postService(url, data) {
        console.log("Axios call");
        return axios({
            method: 'post',
            url: url,  
            data: data
        })
    }

    putService(url = "", payload = null, tokenRequired = false, httpOptions = null) {
        return axios.put(url, payload, tokenRequired && httpOptions);
    }

    deleteService(url = "") {
        console.log("In delete");
        return axios.delete(url);
    }

    // deleteService(url){
    //     console.log("In delete");
    //     return axios({
    //         method: 'delete',
    //         url: 'http://localhost:4000/employee'
    //     })
    // }

    getService(url = "", tokenRequired = false, httpOptions = null) {
        return axios.get(url, tokenRequired && httpOptions);
    }

    // getService(url) {
    //     return axios.get(url);
    // }
}

module.exports = new AxiosService();