import '../css/Form.css';
import React from "react"
import logo from '../logo.svg';

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
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;