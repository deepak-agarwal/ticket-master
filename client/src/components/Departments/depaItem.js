import React from 'react'

function DepaItem(props) {
    const {department}  = props
    return (
        <div>
            <p>Name:{department.name}</p>
            <span>
				<button onClick={()=>props.handleEdit(department)}>Edit</button>
				<button onClick={()=>props.handleRemoveDepartment(department._id)}>Delete</button>
			</span>
        </div>
    )
}

export default DepaItem
