import React from 'react'

function ToggleMode() {
	const handleChangeMode = () => {
		const currentBg = getComputedStyle(
			document.documentElement
		).getPropertyValue('--background-primary')
		const currentMode = currentBg == '#111315' ? 'dark' : 'light'

		const target_bg_primary = currentMode == 'dark' ? '#fff' : '#111315'
		const target_text_primary = currentMode == 'dark' ? '#111315' : '#fff'
		const target_highlight = currentMode == 'dark' ? '#FF8C32' : '#5a48ff'

		//change css
		const changeCSSVar = (varName, targetValue) => {
			document.documentElement.style.setProperty(varName, targetValue)
		}
		changeCSSVar('--background-primary', target_bg_primary)
		changeCSSVar('--text-primary', target_text_primary)
		changeCSSVar('--highlight', target_highlight)
	}

	return (
		<>
			<button className="button Pri" onClick={handleChangeMode}>
				Switch Theme
			</button>
		</>
	)
}

export default ToggleMode
