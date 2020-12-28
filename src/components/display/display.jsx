import React from "react";
import "./display.scss";
import deleteIcon from "../../assets/icons/delete-black-18dp.svg"
import editIcon from "../../assets/icons/create-black-18dp.svg";
import p from '../../assets/1.png';
import p1 from '../../assets/2.png';
import p2 from '../../assets/3.png';
import p3 from '../../assets/4.png';
import { withRouter } from "react-router-dom";
import EmployeeService from "../../services/employee-service"

const Display = (props) => {
  const employeeService = new EmployeeService();

  const update = (employeeId) => {
    let result = window.confirm("Are you sure you want to update?")
    if (result) {
      props.history.push(`payroll-form/${employeeId}`);
    }
    else {
      window.location.reload();
    }
  };

  const remove = (employeeId) => {
    let result = window.confirm("Are you sure you want to delete?")
    if (result) {
      employeeService
        .deleteEmployee(employeeId)
        .then((data) => {
          console.log("data after delete", data);
          window.location.reload();
          props.getAllEmployee();
        })
        .catch((err) => {
          console.log("error after delete", err);
        });
      window.location.reload();
    }
    else {
      window.location.reload();
    }
  };

  return (
    <table id="display" className="display">
      <tbody>
        <tr key={-1} className = "tableHeader">
          <th>Profile Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Actions</th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td>
                <img className="profile"
                  src={
                    element.profile ===
                      "../../assets/1.png"
                      ? p
                      : element.profile ===
                        "../../assets/2.png"
                        ? p1
                        : element.profile ===
                          "../../assets/3.png"
                          ? p2
                          : p3
                  } alt="element.profile"
                />
              </td>
              <td>{element.name}</td>
              <td className="gender">{element.gender}</td>
              <td>
                {element.department &&
                  element.department.map((dept) => (
                    <div className="dept-label">{dept}</div>
                  ))
                }
              </td>
              <td> ₹ {element.salary}</td>
              <td>{element.startDate}</td>
              <td>
                <img
                  onClick={() => remove(element.id)}
                  src={deleteIcon}
                  alt="delete"
                />
                <img
                  onClick={() => update(element.id)}
                  src={editIcon}
                  alt="edit"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default withRouter(Display);