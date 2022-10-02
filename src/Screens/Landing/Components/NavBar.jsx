import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CatafyLogo from '../../../logo.svg'

function NavBar() {
	const navigateTo = useNavigate()
	return (
		<div className="Navbar">
			<div className="Elements">
				<img
					src={CatafyLogo}
					onClick={() => {
						navigateTo('/')
					}}
				/>
				<NavLink to={'/pricing'}>Pricing</NavLink>
				<NavLink to={'/career'}>Career</NavLink>
				<NavLink to={'/about'}>About</NavLink>
			</div>
			<Link to={'/console'} className="button Highlight">
				{'> CONSOLE'}
			</Link>
		</div>
	)
}

export default NavBar
