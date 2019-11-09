import React from "react"
import axios from "../config/axios"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

export default class EmployeeForm extends React.Component {
	constructor() {
		super()
		this.state = {
			name: "",
			email: "",
			mobile: "",
			department: "",
			departments: [],
			isEdit: false
		}
	}
	componentDidMount() {
		axios.get(`/departments`).then(response => {
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
			name: "",
			email: "",
			mobile: "",
			department: ""
		})
		this.props.employee && (formData.id = this.props.employee._id)
		this.props.handleNewEmployee(formData)
	}
	static getDerivedStateFromProps(props, state) {
		if (props.isEdit !== state.isEdit) {
			return {
				name: props.employee.name,
				email: props.employee.email,
				mobile: props.employee.mobile,
				department: props.employee.department,
				isEdit: props.isEdit
			}
		}
		// Return null if the state hasn't changed
		return null
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for='Name'>Name</Label>
						<Input
							type='text'
							name='name'
							id='Name'
							value={this.state.name}
							onChange={this.handleChange}
							placeholder='Enter name'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='Email'>Email</Label>
						<Input
							type='email'
							name='email'
							id='Email'
							value={this.state.email}
							onChange={this.handleChange}
							placeholder='Enter your email'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='Mobile'>Mobile</Label>
						<Input
							type='text'
							name='mobile'
							id='Mobile'
							value={this.state.mobile}
							onChange={this.handleChange}
							placeholder='Mobile Number'
						/>
					</FormGroup>

					<FormGroup>
						<Label for='exampleSelect'>Department</Label>
						
            {this.props.isEdit ? (
                <Input type='select' name='department' value={this.state.department}
								onChange={this.handleChange} id='exampleSelect'>
								<option value={this.state.department._id}>
									{this.state.department.name}
								</option>
								{this.state.departments.map(department => {
									if (department._id === this.state.department._id) return null
									return (
										<option key={department._id} value={department._id}>
											{department.name}
										</option>
									)
								})}
							</Input>
						) : (
							<Input type='select' name='department' value={this.state.department}
								onChange={this.handleChange} id='exampleSelect'>
								<option value=''>Select</option>
								{this.state.departments.map(department => {
									return (
										<option key={department._id} value={department._id}>
											{department.name}
										</option>
									)
								})}
							</Input>
						)}

					</FormGroup>
					<Button>{this.state.isEdit ? "Edit" : "Submit"}</Button>
				</form>
			</div>
		)
	}
}
