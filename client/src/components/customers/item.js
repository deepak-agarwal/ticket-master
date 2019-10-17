import React from "react"
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,Col
} from "reactstrap"

function CustomerItem(props) {
	const { customer } = props
	return (
		<Col xs='4'>
			<Card>
				<CardBody>
					<CardTitle>{customer.name}</CardTitle>
					<CardSubtitle>{customer.email}</CardSubtitle>
					<CardSubtitle>{customer.mobile}</CardSubtitle>
					<Button onClick={() => props.handleEdit(customer)}>Edit</Button>
					<Button className="primary" onClick={() => props.handleRemoveCustomer(customer._id)}>
						Delete
					</Button>
				</CardBody>
			</Card>
		</Col>
	)
}

export default CustomerItem
