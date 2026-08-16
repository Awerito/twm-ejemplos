import { useShop } from "../context/ShopContext";

export default function ProductCard({ item }) {
  const { addToCart } = useShop();
  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      <div style={{ fontWeight: 700 }}>{item.name}</div>
      <div className="small">${item.price.toFixed(2)}</div>
      <div style={{ marginTop: "auto" }}>
        <button className="button primary" onClick={() => addToCart(item)}>
          Add
        </button>
      </div>
    </div>
  );
}
