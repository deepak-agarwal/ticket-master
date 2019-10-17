import React, { Component } from 'react'
import axios from '../config/axios';
import EmployeeItem from './empItem'
import EmployeeForm from './empForm'
import {Row,Col} from 'reactstrap'


export class EmpDashboard extends Component {
    constructor(){
        super()
        this.state={
            employees:[],
            isEdit:false,
            employee:null
        }
    }

    componentDidMount(){
        axios.get('/employees')
        .then(response=>{
            const employees = response.data
            this.setState({
                employees
            })
        })
        .catch(err=>{
            console.log(err)
        })
        
    }

    handleEdit =(employee)=>{
        const isEdit = true
        this.setState({
            employee,isEdit
        })
    }
    handleRemoveEmployee=(id)=>{
        axios
			.delete(`/employees/${id}`)
			.then(response => {
				this.setState(prevState => ({
					employees: prevState.employees.filter(
						employee => employee._id !== response.data._id
					)
				}))
			})
			.catch(err => {
				console.log(err)
			})
    }

    handleNewEmployee= (employee) =>{
        employee.id ? (
			axios
		  .put(`/employees/${employee.id}`, employee)
		  .then(response => {
			console.log(response.data)
			if (response.data.errors) {
			  window.alert(response.data.message)
			  console.log('validation error', response.data.error)
			} else {
			  console.log('success', response.data)
			  axios
			.get(`/employees`)
			.then(response => {
				const employees = response.data
				this.setState({
					employees,
					isEdit:false,
					employee: {}
				})
			})
			.catch(err => {
				console.log(err)
			})
			//   this.props.history.push(`/customers/${response.data._id}`)
			}
		  })
		) 

		: (
        axios
          .post(`/employees`,employee)
          .then(response => {
            if (response.data.errors) {
              alert(response.data.message)
            } else {
            const employee = response.data
            this.setState(prevState=>({
                employees: [...prevState.employees,employee]
            }))
            }
          }))
      }

    render() {
        return (
            <Row>
				<Col xs="8">
					{/* List */}
					<Row>
                    {this.state.employees.map(employee => {
                        return(
                            <EmployeeItem 
                            key={employee._id}
                            employee={employee}
                            handleRemoveEmployee = {this.handleRemoveEmployee}
                            handleEdit={this.handleEdit}
                            />
                        )
                    })}
             	</Row>
				</Col>
				<Col xs="4" > 
					{/* edit/add */}
                <EmployeeForm employee={this.state.employee}
                    isEdit={this.state.isEdit}
                    handleNewEmployee={this.handleNewEmployee} />
          	</Col>
			</Row>
        )
    }
}

export default EmpDashboard
