import React from 'react'

function LogoAndBanner({ newStore, setStoreConfig }) {
	return (
		<div>
			<h2>Upload your store logo</h2>
			<label>{newStore.logoFile?.name}</label>
			<input
				type="file"
				onChange={(e) => {
					setStoreConfig({ ...newStore, logoFile: e.target.files[0] })
				}}
			/>

			<h2>Upload your store banner</h2>
			<label>{newStore.bannerFile?.name}</label>
			<input
				type="file"
				onChange={(e) => {
					setStoreConfig({ ...newStore, bannerFile: e.target.files[0] })
				}}
			/>
			<button
				onClick={() => {
					console.log(newStore)
				}}
			>
				Test
			</button>
		</div>
	)
}

export default LogoAndBanner
