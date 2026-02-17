// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	// Event handler
	const handleClick = (event: MouseEvent) => console.log(event);
	// const getMessage = () => {
	// 	return items.length === 0 ? <p>No items found</p> : null;

	// }

	// items = [];
	return (
		<>
			<h1>List</h1>
			{/* {items.length === 0 ? <p>No items found</p> : null} */}
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group active">
				{items.map((item) => (
					<li className="list-group-item" key={item} onClick={handleClick}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
