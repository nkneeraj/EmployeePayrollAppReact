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
            </div>
        );
    }
}

export default Form;