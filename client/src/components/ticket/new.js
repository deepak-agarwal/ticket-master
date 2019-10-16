import React from "react"
import axios from "../config/axios"
import Select from "react-select"

class Ticketnew extends React.Component {
	constructor() {
		super()
		this.state = {
			customers: [],
			customer: "",
			departments: [],
			message: "",
			priority: "",
			employees: [],
			employee: [],
			employeesnew: [],
			department: "",
			isResolved: false
		}
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSelect = props => {
		this.setState({ [props.name]: props.value })
		if (props.name == "department") {
			this.setState(prev => {
				return {
					employeesnew: prev.employees.filter(
						employee => employee.department_id == prev.department
					)
				}
			})
		} else if (Array.isArray(props) == true) {
            props = props.map(prop => prop.value)
			this.setState({ employee: props })
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		const ticket = {
			customerId: this.state.customer,
			departmentId: this.state.department,
			employeeIds: this.state.employee,
			priority: this.state.priority,
			message: this.state.message,
			code: "202",
			isResolved: this.state.isResolved
		}
		axios.post("/tickets", ticket).then(response => {
			if (response.data._id) {
				console.log("done")
				console.log(response.data)
				this.setState({
					customers: [],
					customer: "",
					departments: [],
					message: "",
					priority: "",
					employees: [],
					employee: [],
					employeesnew: [],
					department: "",
					isResolved: false
				})
			}
		})
	}

	componentDidMount() {
		axios.get("/departments").then(response => {
			const array = []
			response.data.forEach(item => {
				array.push({ value: item._id, label: item.name, name: "department" })
			})
			this.setState({ departments: array })
		})
		axios.get("/customers").then(response => {
			const array = []
			response.data.forEach(item => {
				array.push({ value: item._id, label: item.name, name: "customer" })
			})
			this.setState({ customers: array })
			console.log(array)
		})
		axios.get("/employees").then(response => {
			const array = []
			response.data.forEach(item => {
				array.push({
					value: item._id,
					label: item.name,
					name: "employee"
				})
			})
			this.setState({ employees: array })
		})
	}

	render() {
		return (
			<div>
				<h3>Add Ticket</h3>
				<form onSubmit={this.handleSubmit}>
					<label>
						Customer
						<Select
							name='customer'
							defaultValue='Select Customer'
							options={this.state.customers}
							onChange={this.handleSelect}
						/>
					</label>
					<br />
					<label>
						Department
						<Select
							name='department'
							defaultValue='Select Department'
							options={this.state.departments}
							onChange={this.handleSelect}
						/>
					</label>
					<br />
					<label>
						Employees
						<Select
							isMulti
							name='employee'
							defaultValue='Select Employees'
							options={this.state.employees}
							onChange={this.handleSelect}
						/>
					</label>
					<br />
					<label>
						Message
						<textarea
							name='message'
							value={this.state.message}
							onChange={this.handleChange}
						/>
						<br />
						<br required />
						High
						<input
							type='radio'
							value='high'
							name='priority'
							onChange={this.handleChange}
						/>
						Low
						<input
							type='radio'
							value='low'
							name='priority'
							onChange={this.handleChange}
						/>
						Medium
						<input
							type='radio'
							value='medium'
							name='priority'
							onChange={this.handleChange}
						/>
						<br />
						<input type='submit' value='Submit' />
					</label>
				</form>
			</div>
		)
	}
}

export default Ticketnew
