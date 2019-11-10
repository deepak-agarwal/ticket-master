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
	console.log(ticket.customerId)
	return (
		<Col xs='4'>
			<Card>
				<CardBody>
					<CardTitle>{ticket.customerId.name}</CardTitle>
					<CardTitle>{ticket.departmentId.name}</CardTitle>
					<CardTitle>{ticket.priority}</CardTitle>
					<CardTitle>{ticket.employeeIds.map(e=>e.name + ",")}</CardTitle>
					
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
