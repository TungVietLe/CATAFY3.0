import React from 'react'

function LogoAndBanner({ newStore, setStoreConfig }) {
	return (
		<form>
			<h2>Upload your store logo</h2>
			<label>
				<label>{newStore.logoFile?.name}</label>
				<input
					type="file"
					onChange={(e) => {
						setStoreConfig({ ...newStore, logoFile: e.target.files[0] })
					}}
				/>
			</label>

			<h2>Upload your store banner</h2>
			<label>
				<label>{newStore.bannerFile?.name}</label>
				<input
					type="file"
					onChange={(e) => {
						setStoreConfig({ ...newStore, bannerFile: e.target.files[0] })
					}}
				/>
			</label>
		</form>
	)
}

export default LogoAndBanner
