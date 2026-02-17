// import { Fragment } from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	//hook
	const [selectedIndex, setSelectedIndex] = useState(-1)

	// Event handler
	// const handleClick = (event: MouseEvent) => console.log(event);
	// const getMessage = () => {
	// 	return items.length === 0 ? <p>No items found</p> : null;

	// }

	// items = [];
	return (
		<>
			<h1>List</h1>
			{/* {items.length === 0 ? <p>No items found</p> : null} */}
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group ">
				{items.map((item, Index) => (
					<li
						className={
							selectedIndex === Index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() =>{setSelectedIndex(Index)}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
