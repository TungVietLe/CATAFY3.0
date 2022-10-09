import React from 'react'
import { useState } from 'react'

function MultiPageForm({ elements, submitFunction }) {
	const [page, setPage] = useState(0)

	return (
		<div className="multiPageForm">
			<header>
				{page != 0 && (
					<button
						disabled={page == 0}
						className="button Sec"
						onClick={() => {
							setPage((currentPage) => currentPage - 1)
						}}
					>
						Back
					</button>
				)}

				{page < elements.length - 1 ? (
					<button
						disabled={page == elements.length - 1}
						className="button Pri"
						onClick={() => {
							setPage((currentPage) => currentPage + 1)
						}}
					>
						Next
					</button>
				) : (
					<button className="button Highlight" onClick={submitFunction}>
						submit
					</button>
				)}
			</header>

			<div className="pageIndicator">
				{page + 1}/{elements.length}
			</div>
			<main>{elements[page]}</main>
		</div>
	)
}

export default MultiPageForm
