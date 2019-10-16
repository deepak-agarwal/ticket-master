import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CustomerDashboard from "./components/customers/dashboard";
import DeptDashboard from './components/Departments/deptDashboard'
import EmpDashboard from "./components/employee/empDashboard";
import TicketDashboard from "./components/ticket/ticketDashboard";

function App() {
	const useHeader = {
		textAlign: "center",
		fontFamily: "Open Sans"
	}
	const useLinkStyle = {
		textAlign: "left",
		display: "block",
		padding: "20px",
		fontFamily: "Open Sans",
		textDecoration: "none",
		backgroundColor: "red",
		width: "15vh"
	}
	const useDivStyle = {
		display:'flex'
	}

	const linkContainer = {
	height:'100%',
  }

	return (
		<Router>
				<h2 style={useHeader}>Ticket Master </h2>
				<div style={useDivStyle}>
				<div use={linkContainer}>
					<Link to='/' style={useLinkStyle}>
						Home
					</Link>
					<Link to='/customers' style={useLinkStyle}>
						Customer
					</Link>
					<Link to='/departments' style={useLinkStyle}>
						Department
					</Link>
					<Link to='/employees' style={useLinkStyle}>
						Employee
					</Link>
					<Link to='/tickets' style={useLinkStyle}>
						Tickets
					</Link>
				</div>
				<div>
					<Switch>
						<Route path='/customers' component={CustomerDashboard}/>
						<Route path='/departments' component={DeptDashboard}/>
						<Route path='/employees' component={EmpDashboard}/>
						<Route path='/tickets' component={TicketDashboard}/>
					</Switch>
					</div>
			</div>
		</Router>
	)
}

export default App
