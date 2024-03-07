import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks'
import css from './Navigation.module.css'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active)
}

const Navigation = () => {
	const { isLoggedIn } = useAuth()

	return (
		<nav>
			<NavLink className={buildLinkClass} to='/'>
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink className={buildLinkClass} to='/contacts'>
					Contacts
				</NavLink>
			)}
		</nav>
	)
}

export default Navigation
