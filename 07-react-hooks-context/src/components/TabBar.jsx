import { useMemo } from "react";
import { useShop } from "../context/ShopContext";

export default function TabBar({ tab, onSelect }) {
  const { cart } = useShop();
  const cartCount = useMemo(
    () => cart.reduce((a, it) => a + it.qty, 0),
    [cart],
  );

  const btn = (id, label, extra) => (
    <button
      className={`tab ${tab === id ? "active" : ""}`}
      onClick={() => onSelect(id)}
    >
      {label}
      {extra}
    </button>
  );

  return (
    <nav className="tabbar">
      {btn("menu", "Menu")}
      {btn(
        "cart",
        "Cart",
        <span className="badge" aria-label="items en carrito">
          {cartCount}
        </span>,
      )}
      {btn("checkout", "Checkout")}
    </nav>
  );
}
