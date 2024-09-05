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

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar
					handleRemoveAllItems={handleRemoveAllItems}
					handleAddItem={handleAddItem}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
