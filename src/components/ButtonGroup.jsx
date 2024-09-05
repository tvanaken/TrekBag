import Button from "./Button";

export default function ButtonGroup({ handleRemoveAllItems }) {
	const secondaryButtons = [
		"Mark all as complete",
		"Mark all as incomplete",
		"Reset to initial",
		"Remove all items",
	];

	return (
		<section className="button-group">
			{secondaryButtons.map((text) => {
				return (
					<Button
						handleRemoveAllItems={handleRemoveAllItems}
						key={text}
						type="secondary"
					>
						{text}
					</Button>
				);
			})}
		</section>
	);
}
