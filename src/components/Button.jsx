export default function Button({ type, children, handleRemoveAllItems }) {
	return (
		<button
			onClick={() => {
				handleRemoveAllItems();
			}}
			className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
		>
			{children}
		</button>
	);
}
