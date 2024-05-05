import React, { useState } from "react";
import BasicExample from "./components/BasicExample";

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
					<button onClick={handleShowExample}>Basic Example</button>
				</div>
			) : (
				<div>
					<button onClick={handleGoBack}>Go Back</button>
					<BasicExample />
				</div>
			)}
		</div>
	);
};

export default App;
