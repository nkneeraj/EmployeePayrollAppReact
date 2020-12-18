import config from '../config/config';
const axios = require('axios').default;

export default class  EmployeeService{
    baseUrl = config.baseUrl;
    addEmployee(data) {
        return axios.post(`${this.baseUrl}/employeepayrollservice/create`, data);
    }
}

// import config from "../config/config";
// import AxiosService from "./axios-service.js";
// //const axiosService = new AxiosService();
// export default class EmployeeService {
//   baseUrl = config.baseUrl;
//   addEmployee(data) {
//       return AxiosService.post(url, payload, tokenRequired && httpOptions);
//   }
//   updateEmployee(data) {
//     return AxiosService.putService(`${this.baseUrl}employee/${data.id}`, data);
//   }
//   getAllEmployee() {
//     return AxiosService.getService(`${this.baseUrl}employee`);
//   }
//   getEmployee(id) {
//     return AxiosService.getService(`${this.baseUrl}employee/${id}`);
//   }
//   deleteEmployee(id) {
//     return AxiosService.deleteService(`${this.baseUrl}employee/${id}`);
//   }
// }