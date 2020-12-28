import config from '../config/config.js';
import AxiosService from '../services/axios-service.js';

export default class  EmployeeService{
    baseUrl = config.baseUrl;
    tokenRequired = false;
    httpOptions = null;
    
    addEmployee(data) {
            console.log("In addEmployee");
            console.log(data);
            return AxiosService.postService(`${this.baseUrl}employee/create`, data);
        }

        updateEmployee(data) {
          return AxiosService.putService(`${this.baseUrl}employee/update/${data.id}`, data);
        }
        getAllEmployee() {
          console.log("In getAllEmployee")
          return AxiosService.getService(`${this.baseUrl}employee/getall`);
        }
        getEmployee(id) {
          console.log("In getEmployee by id")
          return AxiosService.getService(`${this.baseUrl}employee/get/${id}`);
        }
        deleteEmployee(id) {
          console.log("In emp delete")
          return AxiosService.deleteService(`${this.baseUrl}employee/delete/${id}`);
        }
  }