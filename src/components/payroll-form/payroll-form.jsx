import React, { useState, useEffect } from 'react';
import profile1 from '../../assets/1.png';
import profile2 from '../../assets/2.png';
import profile3 from '../../assets/3.png';
import profile4 from '../../assets/4.png';
import './payroll-form.scss';
import EmployeeService from "../../services/employee-service";
import logo from '../../assets/logo.png'
import { useParams, Link, withRouter } from 'react-router-dom';

const PayrollForm = (props) => {
    let initialValue = {
        name: '',
        profileArray: [
            { url: '../../assets/1.png' },
            { url: '../../assets/2.png' },
            { url: '../../assets/3.png' },
            { url: '../../assets/4.png' }

        ],
        allDepartment: [
            'HR', 'Sales', 'Finance', 'Engineer', 'Others'
        ],
        departMentValue: [],
        gender: '',
        salary: '',
        day: '1',
        month: 'Jan',
        year: '2020',
        startDate: '',
        notes: '',
        id: '',
        profileUrl: '',
        isUpdate: false,
        error: {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profileUrl: '',
            startDate: ''
        }
    }
    const [formValue, setForm] = useState(initialValue);
    const params = useParams();
    const employeeService = new EmployeeService();

    useEffect(() => {
        if (params.id) {
            getDataById(params.id);
        }
    }, []);

    const getDataById = (id) => {
        employeeService
            .getEmployee(id)
            .then((data) => {
                console.log("data is ", data.data);
                let obj = data.data;
                setData(obj);
            })
            .catch((err) => {
                console.log("err is ", err);
            });
    };

    const setData = (obj) => {
        let array = obj.startDate.split(" ");
        setForm({
            ...formValue,
            ...obj,
            profileUrl: obj.profile,
            departMentValue: obj.department,
            isUpdate: true,
            day: array[0],
            month: array[1],
            year: array[2],
        });
    };

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }

    const onCheckChange = (name) => {
        let index = formValue.departMentValue.indexOf(name);

        let checkArray = [...formValue.departMentValue]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);
        setForm({ ...formValue, departMentValue: checkArray });
    }
    const getChecked = (name) => {
        return formValue.departMentValue && formValue.departMentValue.includes(name);
    }

    const validData = async () => {
        let isError = false;
        let error = {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profileUrl: '',
            startDate: ''
        }
        if (!formValue.name.match('^[A-Z]{1}[a-z A-Z //s]{2,}')) {
            error.name = 'Name should start character capital having min length of 3. Eg: Neeraj Kumar*'
            isError = true;
        }
        if (formValue.gender.length < 1) {
            error.gender = 'Please select your Gender.*'
            isError = true;
        }
        if (formValue.salary.length < 1) {
            error.salary = 'Please select your Salary using slide bar.*'
            isError = true;
        }
        if (formValue.profileUrl.length < 1) {
            error.profileUrl = 'Please select your Profile-Image.*'
            isError = true;
        }
        if (formValue.departMentValue.length < 1) {
            error.department = 'Please select your Department name.*'
            isError = true;
        }
        let enteredDate = new Date(formValue.day+ " " + formValue.month + " " + formValue.year)
        let currentDate = new Date();
        let dateDifference = Math.ceil((currentDate-enteredDate))/(1000*60*60*24);
        let currentDateFormat = currentDate.getDate() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getFullYear();
        let priorDate = new Date(); 
        priorDate.setDate(priorDate.getDate() - 30);
        let priorDateFormat = priorDate.getDate() + "-" + (priorDate.getMonth()+1) + "-" + priorDate.getFullYear();

        if( dateDifference > 30){
            error.startDate = "Date should be between " + priorDateFormat + " and " + currentDateFormat;
            isError = true;
        }
        if( dateDifference < 0){
            error.startDate = "Date can not exceed present date."
            isError = true;
        }
    
        await setForm({ ...formValue, error: error })
        return isError;
    }

    const save = async (event) => {
        let result = window.confirm("Do you want to add new Employee data?")
        if (result) {
            event.preventDefault();
            if (await validData()) {
                console.log("error", formValue);
                return;
            }
            let object = {
                name: formValue.name,
                department: formValue.departMentValue,
                gender: formValue.gender,
                salary: formValue.salary,
                startDate: `${formValue.day} ${formValue.month} ${formValue.year}`,
                notes: formValue.notes,
                id: formValue.id,
                profile: formValue.profileUrl,
            };
            if (formValue.isUpdate) {
                employeeService
                    .updateEmployee(object)
                    .then((data) => {
                        console.log("data after update", data);
                        props.history.push("");
                    })
                    .catch((err) => {
                        console.log("Error after update");
                    });
            } else {
                employeeService
                    .addEmployee(object)
                    .then((data) => {
                        console.log("Employee payroll added");
                        props.history.push("");
                    })
                    .catch((err) => {
                        console.log("error occured while adding employee");
                    });
            }
        }
        else{
            window.location.reload();
        }
    };
    const reset = () => {
        setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
        console.log(formValue);
    }
    return (
        <div className="payroll-main">
            <header className='header row center'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span> <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div className="content">
                <form className="form" action="#" onSubmit={save}>
                    <div className="form-head">Employee Payroll form</div>
                    <div className="row">
                        <label className="label text" htmlFor="name">Name</label>
                        <input className="input" type="text" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name.." required />
                    </div>
                    <div className="error" > {formValue.error.name} </div>
                    <div className="row">
                        <label className="label text" htmlFor="profileUrl">Profile image</label>
                        <div className="profile-radio-button">
                            <label >
                                <input type="radio" checked={formValue.profileUrl === '../../assets/1.png'} name="profileUrl" value="../../assets/1.png" onChange={changeValue} />
                                <img className="profile" src={profile1} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name="profileUrl" checked={formValue.profileUrl === '../../assets/2.png'} value="../../assets/2.png" onChange={changeValue} />
                                <img className="profile" src={profile2} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name="profileUrl" checked={formValue.profileUrl === '../../assets/3.png'} value="../../assets/3.png" onChange={changeValue} />
                                <img className="profile" src={profile3} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name="profileUrl" checked={formValue.profileUrl === '../../assets/4.png'} value="../../assets/4.png" onChange={changeValue} />
                                <img className="profile" src={profile4} alt="profile" />
                            </label>

                        </div>
                    </div>
                    <div className="error" > {formValue.error.profileUrl} </div>
                    <div className="row">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" checked={formValue.gender === 'male'} onChange={changeValue} name="gender" value="male" />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" id="female" checked={formValue.gender === 'female'} onChange={changeValue} name="gender" value="female" />
                            <label className="text" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="error" > {formValue.error.gender} </div>

                    <div className="row">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            {formValue.allDepartment.map(item => (
                                <span key={item}>
                                    <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                        checked={getChecked(item)} value={item} />
                                    <label className="text" htmlFor={item}>{item}</label>
                                </span>
                            ))}

                        </div>
                    </div>
                    <div className="error" > {formValue.error.department} </div>


                    <div className="row">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" type="range" onChange={changeValue} id="salary" value={formValue.salary} name="salary" placeholder="Salary"
                            min="100000" max="1000000" step="50000" />
                        <output className="salary-output text" htmlFor="salary">{formValue.salary}</output>
                    </div>
                    <div className="error" > {formValue.error.salary} </div>


                    <div className="row">
                        <label className="label text" htmlFor="startDate">Start Date</label>
                        <div>
                            <select value={formValue.day} onChange={changeValue} id="day" name="day">
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
                            <select value={formValue.month} onChange={changeValue} id="month" name="month">
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="Aug">August</option>
                                <option value="Sept">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select value={formValue.year} onChange={changeValue} id="year" name="year">
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                    </div>
                    <div className="error" > {formValue.error.startDate} </div>

                    <div className="row">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea onChange={changeValue} id="notes" value={formValue.notes} className="input" name="notes" placeholder=""
                            style={{ height: '100%' }}></textarea>
                    </div>

                    <div className="buttonParent">
                        <Link to="" className="resetButton button cancelButton">Cancel</Link>

                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                            <button type="button" onClick={reset} className="resetButton button">Reset</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    )
}
export default withRouter(PayrollForm);