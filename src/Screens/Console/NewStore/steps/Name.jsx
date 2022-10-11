import React from 'react'

function Name({ newStore, setStoreConfig }) {
	return (
		<form>
			<h2>What is your store name?</h2>
			<label>
				Name
				<input
					placeholder="Lava Bakery"
					value={newStore.name}
					onChange={(e) => {
						setStoreConfig({ ...newStore, name: e.target.value })
					}}
				/>
			</label>

			<h2>What is your slogan?</h2>
			<label>
				Short phrase to catch customers attention
				<input
					value={newStore.slogan}
					placeholder="Less is More"
					onChange={(e) => {
						setStoreConfig({ ...newStore, slogan: e.target.value })
					}}
				/>
			</label>
		</form>
	)
}

export default Name
