import config from '../config/config.js';
import AxiosService from '../services/axios-service.js';

export default class  EmployeeService{
    baseUrl = config.baseUrl;
    tokenRequired = false;
    httpOptions = null;
    
    addEmployee(data) {
            console.log("In addEmployee");
            console.log(data);
            return AxiosService.postService(`${this.baseUrl}employee`, data);
        }
  }