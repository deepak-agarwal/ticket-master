import React from 'react'
import axios from '../config/axios'

export default class EmployeeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      mobile: '',
      department: '',
      departments: [],
      isEdit:false
    }
  }
  componentDidMount() {
    axios
      .get(`/departments`  )
      .then(response => {
        const departments = response.data
        this.setState({
          departments
        })
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      department: this.state.department
    }
    this.setState({
      name:'',
      email:'',
      mobile:'',
      department:''
      })
    this.props.employee && (formData.id = this.props.employee._id) 
    this.props.handleNewEmployee(formData)
  }
  static getDerivedStateFromProps(props, state) {
		if (props.isEdit !== state.isEdit) {
			return {
				name:props.employee.name,
				email: props.employee.email,
        mobile: props.employee.mobile,
        department:props.employee.department,
				isEdit:props.isEdit
			}
		}
		// Return null if the state hasn't changed
		return null
	}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </label>
          <br />
          <br />
          <label>
            Mobile:
            <input
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              name="mobile"
            />
          </label>
          <br />
          <br />
          <label>
            Department:
            {this.props.isEdit?(<select
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
            >
              <option value={this.state.department._id}>{this.state.department.name}</option>
              {this.state.departments.map(department => {
                if(department._id === this.state.department._id)
                return null
                return (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                )
              })}
            </select>):(<select
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
            >
              <option value=''>select</option>
              {this.state.departments.map(department => {
                return (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                )
              })}
            </select>)}
          </label>
          <br /> <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
