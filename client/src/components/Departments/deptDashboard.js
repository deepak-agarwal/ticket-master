import React, { Component } from 'react'
import axios from '../config/axios'
import DeptItem from './depaItem'
import DepartmentForm from './deptForm'
import {Row,Col} from 'reactstrap'

export class DeptDashboard extends Component {
    constructor(){
        super()
        this.state={
            departments:[],
            isEdit:false,
            department: null
        }
    }

    componentDidMount() {
        axios
          .get(`/departments`)
          .then(response => {
            const departments = response.data
            this.setState({ departments })
          })
      }
      handleNewDepartment=(department)=>{
        // console.log(customer.id)
		department.id && (
			axios
		  .put(`/departments/${department.id}`, department)
		  .then(response => {
			console.log(response.data)
			if (response.data.errors) {
			  window.alert(response.data.message)
			  console.log('validation error', response.data.error)
			} else {
			  console.log('success', response.data)
			  axios
			.get(`/departments`)
			.then(response => {
				const departments = response.data
				this.setState({
					departments,
					isEdit:false,
					department: {}
				})
			})
			.catch(err => {
				console.log(err)
			})
			//   this.props.history.push(`/customers/${response.data._id}`)
			}
		  })
		) 

		department.id  || (
        axios
          .post(`/departments`,department)
          .then(response => {
            if (response.data.errors) {
              alert(response.data.message)
            } else {
            const departments = response.data
            // console.log(customer)
            this.setState(prevState=>({
                departments: [...prevState.departments,departments]
            }))
            }
          }))
      }

      handleRemoveDepartment = (id) => {
        axios
        .delete(`/departments/${id}`)
        .then(response => {
            this.setState(prevState => ({
                departments: prevState.departments.filter(
                    department => department._id !== response.data._id
                )
            }))
        })
        .catch(err => {
            console.log(err)
        })
      }

      handleEdit = department=>{
        // console.log(customer)
        const isEdit = true
        this.setState( {
            department,isEdit
        })
	}

    render() {
        return (
            <Row>
              <Col xs='8'>
                <Row>
                {this.state.departments.map(department=>{ 
                                return (<DeptItem 
                                key={department._id}
                                department={department}
                                handleRemoveDepartment={this.handleRemoveDepartment}
                                handleEdit={this.handleEdit}
                                />)
                        })}
                </Row>
              </Col>
              <Col xs='4'>
              <DepartmentForm department={this.state.department}
                        isEdit={this.state.isEdit}
                        handleNewDepartment={this.handleNewDepartment}/>
              </Col>
            </Row>
                       

        )
    }
}

export default DeptDashboard
