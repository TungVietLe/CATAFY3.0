import React from 'react'
import { useState } from 'react'

function MultiPagesForm({ elements, submitFunction }) {
	const [page, setPage] = useState(0)

	return (
		<>
			<main>{elements[page]}</main>

			<footer>
				<button
					disabled={page == 0}
					className="button Sec"
					onClick={() => {
						setPage((currentPage) => currentPage - 1)
					}}
				>
					Back
				</button>

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
			</footer>
		</>
	)
}

export default MultiPagesForm
