import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import '../style/Navbar.css'

const Navbar = () => {

	let [status, setStatus] = useState(false);

	let [position, setPosition] = useState('home');

	const positions = () => {
		let array = []
		if (position === 'home') {
			array = ['fas fa-home fa-lg', 'HOGAR'];
		} else if (position === 'products') {
			array = ['fas fa-credit-card fa-lg', 'PRODUCTOS'];
		} else if (position === 'contact') {
			array = ['fas fa-user-astronaut fa-lg', 'CONTACTO'];
		}
		return array;
	}

	const array = positions();

	return (
		<Fragment>
			<nav>
				<div className='navbar_phone'>
					<div className={status === true ? 'navbar_main hiddenOne' : 'navbar_main viewOne'}>
						<i className='fas fa-bars fa-lg'
							onClick={() => { status === false ? setStatus(status = true) : setStatus(status = false) }}
						>
						</i>
						<b>{status === false ? '' : 'MENU'}</b>
						<div className={status === true ? 'hiddenTwo' : 'viewTwo'} >
							<i className={array[0]}></i>
							<p>{array[1]}</p>
						</div>
					</div>

					<div className={status === false ? 'hiddenThree' : 'viewThree'}>
						<ul>
							<li>
								<div>
									<Link to='/home'
										onClick={() => {
											setPosition(position = 'home');
											setStatus(status = false);
										}}
									>
										<i className='fas fa-home fa-lg'></i>
										<p>HOGAR</p>
									</Link>
								</div>
							</li>

							<li>
								<div>
									<Link to='/'
										onClick={() => {
											setPosition(position = 'products');
											setStatus(status = false);
										}}
									>
										<i className='fas fa-credit-card fa-lg'></i>
										<p>PRODUCTOS</p>
									</Link>
								</div>
							</li>

							<li>
								<div>
									<Link to='/'
										onClick={() => {
											setPosition(position = 'contact');
											setStatus(status = false);
										}}
									>
										<i className='fas fa-user-astronaut fa-lg'></i>
										<p>CONTACTO</p>
									</Link>
								</div>
							</li>
						</ul>
					</div>

				</div>
			</nav>
			<div className={status === false ? 'hiddenFour' : 'viewFour'}>

			</div>
		</Fragment >
	)
}
export default Navbar;