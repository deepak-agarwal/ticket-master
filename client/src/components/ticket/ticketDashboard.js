import React, { Component } from "react"
import TicketItem from "./ticketItem"
import axios from "../config/axios"
import Ticketnew from "./new"
import {Row,Col} from 'reactstrap'


export class TicketDashboard extends Component {
	constructor() {
		super()
		this.state = {
			tickets: [],
			ticket: null,
			isEdit: false
		}
	}

	componentDidMount() {
		axios
			.get("/tickets")
			.then(response => {
                // console.log(response.data)
				const tickets = response.data
				this.setState({ tickets })
			})
			.catch(err => {
				console.log(err)
			})
	}
	handleNewTicket = ticket => {
		ticket.id ? (
			axios.put(`tickets/${ticket.id}`,ticket)
			.then(response => {
				if(response.data.errors){
					window.alert(response.data.message)
				}
				else{
					console.log('success',response.data)
					axios.get('/tickets')
					.then(response => {
						const tickets = response.data
						this.setState({
							tickets,
							isEdit:false,
							ticket:{}
						})
					})
				}
			})
			.catch(err => {
				console.log(err)
			})
		):(
			axios.post(`/tickets`,ticket)
			.then(response => {
				if(response.data.errors){
					alert(response.data.errors)
				}else{
					const ticket = response.data
					this.setState(prevState=>({
						tickets:[...prevState.tickets,ticket]
					}))
				}
			})
		)
	}

	handleEdit = ticket => {
		const isEdit = true
		this.setState({
			ticket,
			isEdit
		})
	}

	handleRemoveTicket = id => {
		axios
			.delete(`/tickets/${id}`)
			.then(response => {
				this.setState(prevState => ({
					tickets: prevState.tickets.filter(
						ticket => ticket._id !== response.data._id
					)
				}))
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<Row>
				<Col xs='8'>
					<Row>
                        {this.state.tickets.map(ticket => {
                            return (
                                <TicketItem 
                                key={ticket._id}
								ticket={ticket}
								handleRemoveTicket={this.handleRemoveTicket}
								handleEdit={this.handleEdit}
                                />
                            )
                        })}
					</Row>
				</Col>
				<Col xs='4'>
                    <Ticketnew 
                    isEdit={this.state.isEdit}
                    ticket={this.state.ticket}
                    handleNewTicket={this.handleNewTicket}
                    />
				</Col>
			</Row>
		)
	}
}

export default TicketDashboard
