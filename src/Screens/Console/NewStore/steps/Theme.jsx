import React from 'react'

function Theme({ newStore, setStoreConfig }) {
	//react component
	const ThemeButton = ({ color }) => {
		const status = newStore.theme == color ? 'selected' : 'notSelected'
		return (
			<div
				className={`themeButton`}
				style={{ background: color }}
				onClick={() => setStoreConfig({ ...newStore, theme: color })}
			>
				<div className={status}></div> {/* center selected indicator circle*/}
			</div>
		)
	}

	return (
		<form>
			<h2>Pick a theme</h2>

			<div className="pickThemeSection">
				<ThemeButton color={'#0377fc'} /> {/* blue */}
				<ThemeButton color={'#FF8C32'} /> {/* orange */}
				<ThemeButton color={'#45ffec'} /> {/* green */}
				<ThemeButton color={'#FB2576'} /> {/* red */}
			</div>
		</form>
	)
}

export default Theme
