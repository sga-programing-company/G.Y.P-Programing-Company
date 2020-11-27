import React, { Fragment, useState } from 'react';
import imagen from '../../images/01.png'
import '../style/Navbar.css'

const Navbar = () => {

	let [status, setStatus] = useState(false);

	let [position, setPosition] = useState('home');

	let [all, setAll] = useState([]);

	return (
		<Fragment>
			<nav>
				<div className='navbar_phone'>
					<div className='navbar_main'>
						<i className='fas fa-bars fa-2x'
							onClick={() => { status === false ? setStatus(status = true) : setStatus(status = false) }}
						>
						</i>
						<b>{status === false ? '' : 'MENU'}</b>
					</div>

					<div className={status === false ? 'hidden' : 'view'}>
						<ul>
							<li>
								<a onClick={() => {
									position !== 'home' ? setAll(all = setPosition(position = 'home'), setStatus(status = false)) : setPosition(position = position)
								}}
								>
									<i className='fas fa-home fa-2x'></i>
										HOME
								</a>
							</li>

							<li>
								<a onClick={() => {
									position !== 'services' ? setAll(all = setPosition(position = 'services'), setStatus(status = false)) : setPosition(position = position)
								}}
								>
									<i className='fas fa-credit-card fa-2x'></i>
										PRODUCTOS
								</a>
							</li>

							<li>
								<a onClick={() => {
									position !== 'contacto' ? setAll(all = setPosition(position = 'contacto'), setStatus(status = false)) : setPosition(position = position)
								}}
								>
									<i className='fas fa-user-astronaut fa-2x'></i>
										CONTACTO
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	)
}
export default Navbar;