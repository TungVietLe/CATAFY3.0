import React from 'react'

//palette
const lightPalette = {
	'--background-primary': '#fff',
	'--text-primary': 'black',
}
const darkPalette = {
	'--background-primary': '#111315',
	'--text-primary': '#fff',
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
