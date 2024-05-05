import React, { useState } from "react";
import BasicExample from "./components/BasicExample";
import "./App.css";

const App = () => {
	const [showExample, setShowExample] = useState(false);

	const handleShowExample = () => {
		setShowExample(true);
	};

	const handleGoBack = () => {
		setShowExample(false);
	};

	return (
		<div>
			{!showExample ? (
				<div>
					<h1>Examples</h1>
					<button
						className="example-button"
						onClick={handleShowExample}
					>
						Basic Example
					</button>
				</div>
			) : (
				<div>
					<button className="back-button" onClick={handleGoBack}>
						Go Back
					</button>
					<BasicExample />
				</div>
			)}
		</div>
	);
};

export default App;
