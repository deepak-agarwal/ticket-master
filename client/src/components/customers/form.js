import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

class CustomerForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			mobile: "",
			isEdit: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		const formData = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile
		}
		this.setState({
			name: "",
			email: "",
			mobile: ""
		})
		this.props.customer && (formData.id = this.props.customer._id)
		this.props.handleNewCustomer(formData)
	}

	static getDerivedStateFromProps(props, state) {
		if (props.isEdit !== state.isEdit) {
			return {
				name: props.customer.name,
				email: props.customer.email,
				mobile: props.customer.mobile,
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
					
					<Button>{(this.state.isEdit)?'Edit':'Submit'}</Button>
				</Form>
			
			</div>
		)
	}
}

export default CustomerForm
