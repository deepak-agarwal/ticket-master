import React from "react"

class CustomerForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			mobile: "",
			isEdit:false
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
		name:'',
		email:'',
		mobile:'',
	  })
	this.props.customer && (formData.id = this.props.customer._id) 
    this.props.handleNewCustomer(formData)
	}

	static getDerivedStateFromProps(props, state) {
		if (props.isEdit !== state.isEdit) {
			return {
				name:props.customer.name,
				email: props.customer.email,
				mobile: props.customer.mobile,
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
							type='text'
							value={this.state.name}
							onChange={this.handleChange}
							name='name'
						/>
					</label>
					<br />
					<br />
					<label>
						Email:
						<input
							type='text'
							value={this.state.email}
							onChange={this.handleChange}
							name='email'
						/>
					</label>

					<br />
					<br />
					<label>
						Mobile:
						<input
							type='number'
							value={this.state.mobile}
							onChange={this.handleChange}
							name='mobile'
						/>
					</label>
					<br />
					<br />
					<input type='submit' value='submit' />
				</form>
			</div>
		)
	}
}

export default CustomerForm
