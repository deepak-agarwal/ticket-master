import React, { Component } from "react"
import CustomerItem from "./item"
import axios from '../config/axios'
import  CustomerForm  from "./form";

class CustomerDashboard extends Component {
	constructor() {
		super()
		this.state = {
            customers: [],
            isEdit:false,
            customer: null
		}
	}
	componentDidMount() {
		axios
			.get(`/customers`)
			.then(response => {
				const customers = response.data
				this.setState({
					customers
				})
			})
			.catch(err => {
				console.log(err)
			})
    }

    handleNewCustomer = (customer) => {
		console.log(customer.id)
		customer.id && (
			axios
		  .put(`/customers/${customer.id}`, customer)
		  .then(response => {
			console.log(response.data)
			if (response.data.errors) {
			  window.alert(response.data.message)
			  console.log('validation error', response.data.error)
			} else {
			  console.log('success', response.data)
			  axios
			.get(`/customers`)
			.then(response => {
				const customers = response.data
				this.setState({
					customers,
					isEdit:false,
					customer: {}
				})
			})
			.catch(err => {
				console.log(err)
			})
			//   this.props.history.push(`/customers/${response.data._id}`)
			}
		  })
		) 

		customer.id  || (
        axios
          .post(`/customers`,customer)
          .then(response => {
            if (response.data.errors) {
              alert(response.data.message)
            } else {
            const customer = response.data
            // console.log(customer)
            this.setState(prevState=>({
                customers: [...prevState.customers,customer]
            }))
            }
          }))
      }

    handleEdit = customer=>{
        const isEdit = true
        this.setState( {
            customer,isEdit
        })
	}
	
	handleRemoveCustomer = id => {
		axios
			.delete(`/customers/${id}`)
			.then(response => {
				this.setState(prevState => ({
					customers: prevState.customers.filter(
						customer => customer._id !== response.data._id
					)
				}))
			})
			.catch(err => {
				console.log(err)
			})
	}

	useDiv ={
		display:'flex'
	}
	useFix={
		// position:'fixed',
		position :'relative'
	}
	render() {
		return (
			<div style={this.useDiv}>
				<div >
					{/* List */}
					{this.state.customers.map(customer => {
						return (
							<CustomerItem
								key={customer._id}
                                customer={customer}
                                handleRemoveCustomer={this.handleRemoveCustomer}
                                handleEdit={this.handleEdit}
							/>
						)
					})}
				</div>
				<div style={this.useFix}>
                    {/* edit/add */}
                    <CustomerForm customer={this.state.customer}
                    isEdit={this.state.isEdit}
                    handleNewCustomer={this.handleNewCustomer} />
				</div>
			</div>
		)
	}
}

export default CustomerDashboard
