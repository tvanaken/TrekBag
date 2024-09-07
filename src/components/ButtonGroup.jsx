import Button from "./Button";

export default function ButtonGroup({
	handleResetToInitial,
	handleRemoveAllItems,
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
}) {
	const secondaryButtons = [
		{
			text: "Mark all as complete",
			onClick: handleMarkAllAsComplete,
		},
		{
			text: "Mark all as incomplete",
			onClick: handleMarkAllAsIncomplete,
		},
		{
			text: "Reset to initial",
			onClick: handleResetToInitial,
		},
		{
			text: "Remove all items",
			onClick: handleRemoveAllItems,
		},
	];

	return (
		<section className="button-group">
			{/* {secondaryButtons.map((text) => {
				return (
					<Button
						handleRemoveAllItems={handleRemoveAllItems}
						key={text}
						type="secondary"
					>
						{text}
					</Button>
				);
			})} */}
			{secondaryButtons.map((button) => {
				return (
					<Button key={button.text} type="secondary" onClick={button.onClick}>
						{button.text}
					</Button>
				);
			})}
		</section>
	);
}
