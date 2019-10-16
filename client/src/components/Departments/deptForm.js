import React from 'react'

export default class DepartmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      isEdit:false
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
      name: ''
    })
    // console.log(formData)
	this.props.department && (formData.id = this.props.department._id) 
    this.props.handleNewDepartment(formData)
  }

  
	static getDerivedStateFromProps(props, state) {
		if (props.isEdit !== state.isEdit) {
			return {
				name:props.department.name,
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
