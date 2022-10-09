import React from 'react'

function DeliveryAndBooking({ newStore, setStoreConfig }) {
	return (
		<div>
			<form>
				<h2>How customer receive orders?</h2>
				<label>
					<div
						className={`selectBar ${newStore.acceptDelivery}`}
						onClick={() =>
							setStoreConfig({
								...newStore,
								acceptDelivery: !newStore.acceptDelivery,
							})
						}
					>
						Delivery
					</div>
					<div
						className={`selectBar ${newStore.acceptPickup}`}
						onClick={() =>
							setStoreConfig({
								...newStore,
								acceptPickup: !newStore.acceptPickup,
							})
						}
					>
						At Store
					</div>
				</label>

				<h2>Are customers required to book a date?</h2>
				<label>
					<div
						className={`selectBar ${newStore.requireBooking}`}
						onClick={() =>
							setStoreConfig({ ...newStore, requireBooking: true })
						}
					>
						Yes
					</div>
					<div
						className={`selectBar ${!newStore.requireBooking}`}
						onClick={() =>
							setStoreConfig({ ...newStore, requireBooking: false })
						}
					>
						No
					</div>
				</label>
			</form>
		</div>
	)
}

export default DeliveryAndBooking
