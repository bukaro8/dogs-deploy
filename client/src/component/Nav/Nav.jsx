import { Link, NavLink } from 'react-router-dom';
import '../Nav/Nav.css';
import logo from '../../image/dogLogo.webp';
export default function Nav() {
	return (
		<nav className='header'>
			<div className='headerLogo'>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
			</div>
			<nav className='headerLinks'>
				<div className='links'>
					<NavLink exact to='/'>
						Home
					</NavLink>
				</div>
				<div className='links'>
					<NavLink to='/newbreed'>Create Breed</NavLink>
				</div>
			</nav>
		</nav>
	);
}
