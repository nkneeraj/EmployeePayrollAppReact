import React from 'react'
// import './demo.css'

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // name: '',
            // gender: '',
            // department: ''
            fields: {}
        }
    }

    // handleName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        })
        console.log(e);
    }

    handleSubmit = () => {
        let Employee = {
            employeeName: this.state.fields.name,
            employeeDept: this.state.fields.department,
            employeeGender: this.state.fields.gender
        }
        console.log(Employee)
    }

    render() {
        return (
            <div className="form">
                <input type="text" onChange={(event) => this.handleChange(event)} name="name" placeholder="Employee name.." required />
                <input type="text" onChange={(event) => this.handleChange(event)} name="department" placeholder="Employee department.." required />
                <input type="text" onChange={(event) => this.handleChange(event)} name="gender" placeholder="Gender.." required />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
export default Demo;