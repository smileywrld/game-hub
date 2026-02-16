// import { Fragment } from "react";
function ListGroup() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	if (items.length === 0) {
		return <p>No items found</p>
	}
	return (
		<>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
