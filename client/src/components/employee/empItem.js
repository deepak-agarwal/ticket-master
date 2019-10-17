import React from "react"
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Col
} from "reactstrap"

function EmployeeItem(props) {
	const { employee } = props
	return (
		<Col xs='4'>
			<Card>
				<CardBody>
					<CardTitle>{employee.name}</CardTitle>
					<CardSubtitle>{employee.email}</CardSubtitle>
					<CardSubtitle>{employee.mobile}</CardSubtitle>
					<CardSubtitle>{employee.department.name}</CardSubtitle>
					<Button onClick={() => props.handleEdit(employee)}>Edit</Button>
					<Button onClick={() => props.handleRemoveEmployee(employee._id)}>
						Delete
					</Button>
				</CardBody>
			</Card>
		</Col>
	)
}

export default EmployeeItem
