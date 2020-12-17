import '../css/Form.css';
import React from "react"
import logo from '../assets/logo.png';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';

class Form extends React.Component {
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
                <div id="formID" class="form-content">
                    <form class="form" name="emp" action="#" onreset="resetForm()" onsubmit="save(event)">
                        <div class="form-head">Employee Payroll Form</div>
                        <div class="row-content">
                            <label class="label text" for="name">Name</label>
                            <input class="input" type="text" id="name" name="name" placeholder="Your Name.." required />
                            <error-output class="text-error" for="text"></error-output>
                        </div>
                        <div class="row-content">
                            <label class="label text" for="profile">Profile image</label>
                            <div class="profile-radio-content">
                                <label>
                                    <input type="radio" id="profile1" name="profile" value="../assets/1.png" required />
                                    <img class="profile" id="image1" src={p1} alt="img1" />
                                </label>
                                <label>
                                    <input type="radio" id="profile2" name="profile" value="../assets/2.png" required />
                                    <img class="profile" id="image2" src={p2} alt="img2" />
                                </label>
                                <label>
                                    <input type="radio" id="profile3" name="profile" value="../assets/3.png" required />
                                    <img class="profile" id="image3" src={p3} alt="img3" />
                                </label>
                                <label>
                                    <input type="radio" id="profile4" name="profile" value="../assets/4.png" required />
                                    <img class="profile" id="image4" src={p4} alt="img4" />
                                </label>
                            </div>
                        </div>
                        <div class="row-content">
                            <label class="label text" for="gender">Gender</label>
                            <div>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label class="text" for="male">Male</label>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label class="text" for="female">Female</label>
                            </div>
                        </div>
                        <div class="row-content">
                            <label class="label text" for="department">Department</label>
                            <div>
                                <input class="checkbox" type="checkbox" id="hr" name="department" value="HR" />
                                <label class="text" for="hr">HR</label>
                                <input class="checkbox" type="checkbox" id="sales" name="department" value="Sales" />
                                <label class="text" for="sales">Sales</label>
                                <input class="checkbox" type="checkbox" id="finance" name="department" value="Finance" />
                                <label class="text" for="finance">Finance</label>
                                <input class="checkbox" type="checkbox" id="engineer" name="department" value="Engineer" />
                                <label class="text" for="engineer">Engineer</label>
                                <input class="checkbox" type="checkbox" id="others" name="department" value="Others" />
                                <label class="text" for="others">Others</label>
                            </div>
                        </div>
                        <div class="row-content">
                            <label class="label text" for="salary">Choose Your Salary: </label>
                            <input class="input" type="range" name="salary" id="salary" min="30000" max="100000" step="100" value="5000" />
                            <output class="salary-output text" for="salary">30000</output>
                        </div>
                        <div class="row-content">
                            <label class="label text" for="startDate">Start Date</label>
                            <div id="startDate">
                                <select id="day" name="Day">
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
                                <select id="month" name="Month">
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
                                <select id="year" name="Year">
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                </select>
                            </div>
                            <error-output class="date-error" for="text"></error-output>
                        </div>
                        <div class="row-content">
                            <label class="label text" for="notes">Notes</label>
                            <textarea className = "notetext" id="notes" class="input" name="Notes" placeholder="additional info.."></textarea>
                        </div>
                        <div class="buttonParent">
                            <a href="./home.html" class="resetButton button cancelButton">cancel</a>
                            <div class="submit-reset">
                                <button type="submit" class="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" class="resetButton button">Reset</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Form;