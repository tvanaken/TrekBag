export default function ItemList({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <Item key={item.name} item={item} />
            ))}
        </ul>
    );
}

function Item({ item }) {
    return (
        <li className="item">
            <label>
                <input checked={item.packed} type="checkbox" /> {item.name}
            </label>
            <button className="remove-item">❌</button>
        </li>
    );
}
