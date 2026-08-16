import { useShop } from "../context/ShopContext";
import ProductCard from "./ProductCard";

export default function ProductList({ filter = "" }) {
  const { products } = useShop();
  const q = filter.trim().toLowerCase();
  const visible = q
    ? products.filter((p) => p.name.toLowerCase().includes(q))
    : products;
  return (
    <div className="grid">
      {visible.map((p) => (
        <ProductCard key={p.id} item={p} />
      ))}
    </div>
  );
}
