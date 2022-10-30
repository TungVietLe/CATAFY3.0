import React from 'react'

//palette
const lightPalette = {
	'--background-primary': '#fff',
	'--background-secondary': '#F4F7FF',
	'--background-tertiary': '#EAEEF4',
	'--text-primary': 'black',
	'--highlight': '#0072E3',
}
const darkPalette = {
	'--background-primary': '#111315',
	'--background-secondary': '#1a1d1f',
	'--background-tertiary': '#272b30',
	'--text-primary': '#fff',
	'--text-secondary': '#d0d6dc',
	'--text-tertiary': '#b7babd',
	'--highlight': '#5a48ff',
}
//change css
const changeCSSVar = (varName, targetValue) => {
	document.documentElement.style.setProperty(varName, targetValue)
}
//apply palette
const applyPalette = (paletteObj) => {
	Object.keys(paletteObj).forEach((field) => {
		changeCSSVar(field, paletteObj[field.toString()])
	})
}

function ToggleModeButton() {
	const handleChangeMode = () => {
		const currentBg = getComputedStyle(document.documentElement).getPropertyValue(
			'--background-primary'
		)

		const currentMode =
			currentBg.replace(/ /g, '') == darkPalette['--background-primary'] ? 'dark' : 'light'

		//EXECUTE
		currentMode == 'dark' ? applyPalette(lightPalette) : applyPalette(darkPalette)
	}

	return (
		<>
			<button
				style={{
					padding: '0.3rem 0.6rem',
					borderRadius: '0.3rem',
				}}
				className="button Pri"
				onClick={handleChangeMode}
			>
				☀
			</button>
		</>
	)
}

export default ToggleModeButton
