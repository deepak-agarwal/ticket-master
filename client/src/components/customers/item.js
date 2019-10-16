import React from "react"


function CustomerItem(props) {
	const { customer } = props
	return (
		<div>
			<p>Name:{customer.name}</p>
			<p>Email:{customer.email}</p>
			<p>Mobile:{customer.mobile}</p>
			<span>
				<button onClick={()=>props.handleEdit(customer)}>Edit</button>
				<button onClick={()=>props.handleRemoveCustomer(customer._id)}>Delete</button>
			</span>
		</div>
	)
}

export default CustomerItem
