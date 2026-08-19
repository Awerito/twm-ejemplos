import { createContext, useContext, useMemo, useState } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children, initialProducts = [] }) {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prev) => {
      const found = prev.find((it) => it.id === item.id);
      if (found) {
        return prev.map((it) =>
          it.id === item.id ? { ...it, qty: it.qty + 1 } : it,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function inc(id) {
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)),
    );
  }

  function dec(id) {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: it.qty - 1 } : it))
        .filter((it) => it.qty > 0),
    );
  }

  function remove(id) {
    setCart((prev) => prev.filter((it) => it.id !== id));
  }

  const value = useMemo(
    () => ({ products, cart, addToCart, inc, dec, remove }),
    [products, cart],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within a ShopProvider");
  return ctx;
}
