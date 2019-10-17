import React,{useState} from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CustomerDashboard from "./components/customers/dashboard"
import DeptDashboard from "./components/Departments/deptDashboard"
import EmpDashboard from "./components/employee/empDashboard"
import TicketDashboard from "./components/ticket/ticketDashboard"
// import { Nav, NavItem, NavLink } from "reactstrap"
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap"

function App() {
	const [collapsed, setCollapsed] = useState(true)
	const toggleNavbar = () => setCollapsed(!collapsed)

	return (
		<Router>
			<Navbar color='dark' light>
				<NavbarBrand href='/' className='mr-auto'>
					Ticket Master
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
					<NavItem>
					<NavLink href='#'>
						<Link to='/'>Home</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>
						<Link to='/customers'>Customer</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>
						<Link to='/departments'>Department</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>
						<Link to='/employees'>Employee</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>
						<Link to='/tickets'>Tickets</Link>
					</NavLink>
				</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<div>
				<Switch>
					<Route path='/customers' component={CustomerDashboard} />
					<Route path='/departments' component={DeptDashboard} />
					<Route path='/employees' component={EmpDashboard} />
					<Route path='/tickets' component={TicketDashboard} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
