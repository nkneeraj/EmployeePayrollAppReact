import './payroll-form/Form.css';
import React from "react"
import logo from '../assets/logo.png';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
// import React, { useState, useEffect } from 'react';
// import EmployeeService from "../services/employee-service";
// import { useParams, Link, withRouter } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            Emp: {}
        }
    }

    handleChange = (e) => {
        let Emp = this.state.Emp;
        Emp[e.target.name] = e.target.value;
        this.setState({
            Emp
        })
        console.log(e);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // let day = this.state.Emp.Day;
        // let month = this.state.Emp.Month;
        // let year = this.state.Emp.Year;
        let Employee = {
            employeeName: this.state.Emp.name,
            employeeDept: this.state.Emp.department,
            employeeGender: this.state.Emp.gender,
            employeeProfileURL: this.state.Emp.profile,
            employeeDate: this.state.Emp.Day, 
            employeeNote: this.state.Emp.Notes
        }
        console.log(Employee);
    }

    render() {
        return (
            <div className='body'>
                <header className='header-content header'>
                    <div className="logo-content">
                        <img className="logo-image" src={logo} alt="" />
                        <div>
                            <span className="emp-text">EMPLOYEE</span> <br />
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div id="formID" className="form-content">
                    <form className="form" name="name" action="#" onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="form-head">Employee Payroll Form</div>
                        <div className="row-content">
                            <label className="label text" htmlFor="name">Name</label>
                            <input className="input" type="text" onChange={(event) => this.handleChange(event)} name="name" placeholder="Your Name.." required />
                            <error-output className="text-error" htmlFor="text"></error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="profile">Profile image</label>
                            <div className="profile-radio-content">
                                <label>
                                    <input type="radio" id="profile1" name="profile"  onChange={(event) => this.handleChange(event)} value="../assets/1.png" required />
                                    <img className="profile" id="image1" src={p1} alt="img1" />
                                </label>
                                <label>
                                    <input type="radio" id="profile2" name="profile"  onChange={(event) => this.handleChange(event)} value="../assets/2.png" required />
                                    <img className="profile" id="image2" src={p2} alt="img2" />
                                </label>
                                <label>
                                    <input type="radio" id="profile3" name="profile"  onChange={(event) => this.handleChange(event)} value="../assets/3.png" required />
                                    <img className="profile" id="image3" src={p3} alt="img3" />
                                </label>
                                <label>
                                    <input type="radio" id="profile4" name="profile"  onChange={(event) => this.handleChange(event)} value="../assets/4.png" required />
                                    <img className="profile" id="image4" src={p4} alt="img4" />
                                </label>
                            </div>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="gender">Gender</label>
                            <div>
                                <input type="radio"  onChange={(event) => this.handleChange(event)} name="gender" value="male1" />
                                <label className="text" htmlFor="male">Male</label>
                                <input type="radio" onChange={(event) => this.handleChange(event)}  name="gender" value="female" />
                                <label className="text" htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="department">Department</label>
                            <div>
                                <input className="checkbox" type="checkbox" onChange={(event) => this.handleChange(event)} name="department" value="HR" />
                                <label className="text" htmlFor="hr">HR</label>
                                <input className="checkbox" type="checkbox" onChange={(event) => this.handleChange(event)} name="department" value="Sales" />
                                <label className="text" htmlFor="sales">Sales</label>
                                <input className="checkbox" type="checkbox" onChange={(event) => this.handleChange(event)} name="department" value="Finance" />
                                <label className="text" htmlFor="finance">Finance</label>
                                <input className="checkbox" type="checkbox" onChange={(event) => this.handleChange(event)} name="department" value="Engineer" />
                                <label className="text" htmlFor="engineer">Engineer</label>
                                <input className="checkbox" type="checkbox" onChange={(event) => this.handleChange(event)} name="department" value="Others" />
                                <label className="text" htmlFor="others">Others</label>
                            </div>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="salary">Choose Your Salary: </label>
                            <input className="input" type="range" name="salary" id="salary" min="30000" max="100000" step="100" />
                            <output className="salary-output text" htmlFor="salary">30000</output>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="startDate">Start Date</label>
                            <div id="startDate">
                                <select onChange={(event) => this.handleChange(event)} name="Day">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select id="month" name="Month" onChange={(event) => this.handleChange(event)}>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select id="year" name="Year" onChange={(event) => this.handleChange(event)}>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                </select>
                            </div>
                            <error-output className="date-error" htmlFor="text"></error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="notes">Notes</label>
                            <textarea className="notetext input" onChange={(event) => this.handleChange(event)} name="Notes" placeholder="additional info.."></textarea>
                        </div>
                        <div className="buttonParent">
                            <a href="./home.html" className="resetButton button cancelButton">cancel</a>
                            <div className="submit-reset">
                                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" className="resetButton button">Reset</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

// export default withRouter(PayrollForm);
export default Form;