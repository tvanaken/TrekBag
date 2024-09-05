import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { exampleItems } from "../lib/constants";

function App() {
	const [items, setItems] = useState(exampleItems);

	const handleAddItem = (newItemName) => {
		const newItem = {
			id: Date.now(),
			name: newItemName,
			packed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
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

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList items={items} />
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
