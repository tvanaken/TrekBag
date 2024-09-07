import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
	{ label: "Sort by default", value: "default" },
	{ label: "Sory by packed", value: "packed" },
	{ label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList({ items, handleDeleteItem, handleCheckItem }) {
	const [sortBy, setSortBy] = useState("default");

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === "packed") {
					return b.packed - a.packed;
				}
				if (sortBy === "unpacked") {
					return a.packed - b.packed;
				}
				return;
			}),
		[items, sortBy]
	);

	return (
		<ul className="item-list">
			{items.length === 0 && <EmptyView />}

			{items.length > 0 ? (
				<section className="sorting">
					<Select
						onChange={(option) => setSortBy(option.value)}
						options={sortingOptions}
						defaultValue={sortingOptions[0]}
					/>
				</section>
			) : null}

			{sortedItems.map((item) => (
				<Item
					key={item.name}
					item={item}
					handleDeleteItem={handleDeleteItem}
					handleCheckItem={handleCheckItem}
				/>
			))}
		</ul>
	);
}

function Item({ item, handleDeleteItem, handleCheckItem }) {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => handleCheckItem(item.id)}
					checked={item.packed}
					type="checkbox"
				/>{" "}
				{item.name}
			</label>
			<button onClick={() => handleDeleteItem(item.id)} className="remove-item">
				❌
			</button>
		</li>
	);
}
