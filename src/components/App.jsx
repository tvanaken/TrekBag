import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { exampleItems } from "../lib/constants";

function App() {
	const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));

	const [items, setItems] = useState(itemsFromLocalStorage || exampleItems);

	const handleDeleteItem = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);
	};

	const handleAddItem = (newItemName) => {
		const newItem = {
			id: Date.now(),
			name: newItemName,
			packed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const handleCheckItem = (id) => {
		const updatedItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, packed: !item.packed };
			}
			return item;
		});
		setItems(updatedItems);
	};

	const handleRemoveAllItems = () => {
		setItems([]);
	};

	const handleResetToInitial = () => {
		setItems(exampleItems);
	};

	const handleMarkAllAsComplete = () => {
		const updatedItems = items.map((item) => ({ ...item, packed: true }));
		setItems(updatedItems);
	};

	const handleMarkAllAsIncomplete = () => {
		const updatedItems = items.map((item) => ({ ...item, packed: false }));
		setItems(updatedItems);
	};

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	const itemsPacked = items.filter((item) => item.packed).length;

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header itemsPacked={itemsPacked} totalItems={items.length} />
				<ItemList
					items={items}
					handleDeleteItem={handleDeleteItem}
					handleCheckItem={handleCheckItem}
				/>
				<Sidebar
					handleRemoveAllItems={handleRemoveAllItems}
					handleResetToInitial={handleResetToInitial}
					handleAddItem={handleAddItem}
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
