import React from "react"


function EmployeeItem(props) {
	const { employee } = props
	return (
		<div>
			<p>Name:{employee.name}</p>
			<p>Email:{employee.email}</p>
			<p>Mobile:{employee.mobile}</p>
            <p>Department:{employee.department.name}</p>
			<span>
				<button onClick={()=>props.handleEdit(employee)}>Edit</button>
				<button onClick={()=>props.handleRemoveEmployee(employee._id)}>Delete</button>
			</span>
		</div>
	)
}

export default EmployeeItem
