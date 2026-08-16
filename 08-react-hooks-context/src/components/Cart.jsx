import { useShop } from "../context/ShopContext";

function money(n) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Cart() {
  const { cart, inc, dec, remove } = useShop();
  const subtotal = cart.reduce((acc, it) => acc + it.price * it.qty, 0);

  if (!cart.length) return <p className="small">Cart is empty.</p>;

  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      {cart.map((it) => (
        <div
          key={it.id}
          className="row"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <div style={{ fontWeight: 600 }}>{it.name}</div>
            <div className="small">
              ${money(it.price)} • Total: ${money(it.price * it.qty)}
            </div>
          </div>
          <div className="row" style={{ gap: 6 }}>
            <button className="button" onClick={() => dec(it.id)}>
              –
            </button>
            <div>{it.qty}</div>
            <button className="button" onClick={() => inc(it.id)}>
              +
            </button>
            <button className="button ghost" onClick={() => remove(it.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <hr />
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span>Subtotal</span>
        <span className="total">${money(subtotal)}</span>
      </div>
    </div>
  );
}
