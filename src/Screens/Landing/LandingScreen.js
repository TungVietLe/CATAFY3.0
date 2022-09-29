import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import NavBar from './Components/NavBar';

function LandingScreen() {
	const [wantedStoreid, setWantedid] = useState('');

	return (
		<>
			<NavBar />
			<section className="heroSection">
				<h1>Create your own online store in less than 3 minutes.</h1>
				<div className="storeIDinput">
					catafy.io/
					<input
						placeholder="storeid"
						onChange={(e) => {
							setWantedid(e.target.value);
						}}
					/>
				</div>
				<Link className="button Pri" to={`/console/new/${wantedStoreid}`}>
					Start My Store
				</Link>
			</section>
		</>
	);
}

export default LandingScreen;
