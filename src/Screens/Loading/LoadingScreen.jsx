import React from 'react'

function LoadingScreen({ label }) {
	return (
		<div className="LoadingScreen">
			<h2>{label}</h2>
			<p>Wait A Second...</p>
		</div>
	)
}

export default LoadingScreen
