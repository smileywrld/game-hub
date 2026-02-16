// import { Fragment } from "react";
function ListGroup() {
	let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	// const getMessage = () => {
	// 	return items.length === 0 ? <p>No items found</p> : null;

	// }

	// items = [];
	return (
		<>
			<h1>List</h1>
			{/* {items.length === 0 ? <p>No items found</p> : null} */}
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li className="list-group-item" key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
