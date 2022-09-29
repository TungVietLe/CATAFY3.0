import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { handleCreateStore } from '../../../Hooks/Create/handleCreateStore';

function NewStoreConfig({ storeid }) {
	const user = useContext(UserContext);
	const userid = user?.uid;
	const navigateTo = useNavigate();

	//
	const [storeName, setStoreName] = useState();
	const [logo, setLogo] = useState();
	const [banner, setBanner] = useState();
	//Receive Order Method
	const [acceptPickUp, setPickUp] = useState(false);
	const [acceptDelivery, setDelivery] = useState(false);
	//Reservation
	const [requireBooking, setBooking] = useState(false);

	//Validity
	const validStoreName = storeName && storeName !== '';
	const validOveral = validStoreName && logo && banner;

	return (
		<>
			<p>Your Store ID: {storeid}</p>

			{/* _____ INPUTS _____ */}
			<form>
				<label>
					Store Name
					<input
						onChange={(e) => {
							setStoreName(e.target.value);
						}}
					/>
				</label>

				<label>
					Logo
					<input
						type={'file'}
						onChange={(e) => {
							setLogo(e.target.files[0]);
						}}
					/>
				</label>
				<label>
					Banner
					<input
						type={'file'}
						onChange={(e) => {
							setBanner(e.target.files[0]);
						}}
					/>
				</label>
				<label>
					How Customer Receive Order?
					<div
						className={`select ${acceptPickUp}`}
						onClick={() => setPickUp(!acceptPickUp)}
					>
						At Store
					</div>
					<div
						className={`select ${acceptDelivery}`}
						onClick={() => setDelivery(!acceptDelivery)}
					>
						Delivery
					</div>
				</label>
				<label>
					Are Customer Required To Make A Reservation?
					<div
						className={`select ${requireBooking}`}
						onClick={() => setBooking(true)}
					>
						Yes
					</div>
					<div
						className={`select ${!requireBooking}`}
						onClick={() => setBooking(false)}
					>
						No
					</div>
				</label>
			</form>
			{/* _____ INPUTS _____ */}

			<button
				id="createStoreButton"
				disabled={!validOveral}
				onClick={() => {
					handleCreateStore(userid, storeid, storeName, logo).then(() => {
						navigateTo('/console');
					});
				}}
			>
				Create
			</button>
		</>
	);
}

export default NewStoreConfig;
