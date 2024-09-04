const exampleItems = [
	{
		id: 1,
		name: "good mood",
		packed: true,
	},
	{
		id: 2,
		name: "passport",
		packed: false,
	},
	{
		id: 3,
		name: "sleeping pills",
		packed: false,
	},
];

export default function ItemList() {
	return (
		<ul>
			{exampleItems.map((item) => (
				<Item key={item.name} item={item} />
			))}
		</ul>
	);
}

function Item({ item }) {
	return (
		<li className="item">
			<label>
				<input type="checkbox" /> {item.name}
			</label>
		</li>
	);
}
