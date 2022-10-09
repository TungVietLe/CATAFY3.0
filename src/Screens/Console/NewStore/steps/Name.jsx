import React from 'react'

function Name({ newStore, setStoreConfig }) {
	return (
		<div>
			<h2>What is your store name?</h2>
			<input
				value={newStore.name}
				onChange={(e) => {
					setStoreConfig({ ...newStore, name: e.target.value })
				}}
			/>

			<h2>What is your slogan?</h2>
			<p>Short phrase to catch customers attention</p>
			<input
				value={newStore.slogan}
				placeholder="Never Give Up"
				onChange={(e) => {
					setStoreConfig({ ...newStore, slogan: e.target.value })
				}}
			/>
		</div>
	)
}

export default Name
