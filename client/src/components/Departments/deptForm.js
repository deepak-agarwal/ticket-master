import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

export default class DepartmentForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			isEdit: false
		}
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit = e => {
		e.preventDefault()
		const formData = {
			name: this.state.name
		}
		this.setState({
			name: ""
		})
		// console.log(formData)
		this.props.department && (formData.id = this.props.department._id)
		this.props.handleNewDepartment(formData)
	}

	static getDerivedStateFromProps(props, state) {
		if (props.isEdit !== state.isEdit) {
			return {
				name: props.department.name,
				isEdit: props.isEdit
			}
		}
		// Return null if the state hasn't changed
		return null
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
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
					<Button>{(this.state.isEdit)?'Edit':'Submit'}</Button>
				</Form>
			</div>
		)
	}
}
