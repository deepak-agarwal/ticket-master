import React from 'react'
import {
	Card,
	CardBody,
	CardTitle,
	Button,Col
} from "reactstrap"

function DepaItem(props) {
    const {department}  = props
    return (
            <Col xs='4'>
			<Card>
				<CardBody>
					<CardTitle>{department.name}</CardTitle>
					<Button onClick={()=>props.handleEdit(department)}>Edit</Button>
					<Button conClick={()=>props.handleRemoveDepartment(department._id)}>
						Delete
					</Button>
				</CardBody>
			</Card>
		</Col>
    )
}

export default DepaItem
