import React, { useState, useEffect } from "react";
import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";

const BasicExample = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Datos de ejemplo para la cuadrícula
		const mockData = [
			{ id: 1, name: "John Doe", age: 25 },
			{ id: 2, name: "Jane Smith", age: 30 },
			{ id: 3, name: "Bob Johnson", age: 35 },
		];
		setData(mockData);
	}, []);

	const columns = [
		{ title: "ID", id: "id", width: 50 },
		{ title: "Name", id: "name", width: 200 },
		{ title: "Age", id: "age", width: 100 },
	];

	const getCellContent = ([col, row]) => {
		const item = data[row];
		const column = columns[col];
		switch (column.id) {
			case "id":
				return {
					kind: GridCellKind.Number,
					data: item.id,
					displayData: item.id.toString(),
				};
			case "name":
				return {
					kind: GridCellKind.Text,
					data: item.name,
					displayData: item.name,
				};
			case "age":
				return {
					kind: GridCellKind.Number,
					data: item.age,
					displayData: item.age.toString(),
				};
			default:
				return { kind: GridCellKind.Text, data: "", displayData: "" };
		}
	};

	return (
		<div>
			<h1>Glide Data Grid Example</h1>
			<DataEditor
				getCellContent={getCellContent}
				columns={columns}
				rows={data.length}
			/>
		</div>
	);
};

export default BasicExample;
