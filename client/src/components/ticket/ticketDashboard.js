import React, { Component } from 'react'
import TicketItem from './ticketItem'
import axios from '../config/axios'
import Ticketnew from './new'

export class TicketDashboard extends Component {
    constructor(){
        super()
        this.state={
            ticket:null
        }
    }

    componentDidMount(){
        axios.get('/tickets')
        .then(response =>{
            console.log(response.data)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <TicketItem />
                </div>
                <div>
                    <Ticketnew />
                </div>
            </div>
        )
    }
}

export default TicketDashboard
