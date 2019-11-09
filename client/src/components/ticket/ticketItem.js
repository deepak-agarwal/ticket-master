import React, { Component } from "react"
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Col
} from "reactstrap"

function TicketItem(props) {
	const { ticket } = props
	return (
		<Col xs='4'>
			<Card>
				<CardBody>
					<CardTitle>{ticket.customerId}</CardTitle>
					{/* <CardSubtitle>{employee.email}</CardSubtitle>
					<CardSubtitle>{employee.mobile}</CardSubtitle>
					<CardSubtitle>{employee.department.name}</CardSubtitle> */}
					<Button onClick={() => props.handleEdit(ticket)}>Edit</Button>
					<Button onClick={() => props.handleRemoveEmployee(ticket._id)}>
						Delete
					</Button>
				</CardBody>
			</Card>
		</Col>
	)
}

export default TicketItem
