import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/argentBankLogo.png'
import { useLocation } from 'react-router'
import { setLoggedIn } from '../../action'
import { selectIsLoggedIn } from '../../selector'

export function Header() {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const location = useLocation()
	const dispatch = useDispatch()

	const handleSignOut = () => {
		dispatch(setLoggedIn(false))
	}

	let linkToLogin
	if (!isLoggedIn)
		linkToLogin = (
			<Link className="main-nav-item" to="/sign-in">
				<i className="fa fa-user-circle"></i>
				Sign In
			</Link>
		)
	else if (location.pathname === '/')
		linkToLogin = (
			<Link className="main-nav-item" to="/user">
				<i className="fa fa-user-circle"></i>
				Account
			</Link>
		)
	else {
		linkToLogin = (
			<Link className="main-nav-item" to="/" onClick={handleSignOut}>
				<i className="fa fa-user-circle"></i>
				Sign Out
			</Link>
		)
	}

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{linkToLogin}
		</nav>
	)
}
