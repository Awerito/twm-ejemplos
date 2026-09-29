import { useState } from "react";
import "./styles.css";
import { PRODUCTS } from "./data";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { ShopProvider } from "./context/ShopContext";

export default function App() {
  const [tab, setTab] = useState("menu");
  return (
    <ShopProvider initialProducts={PRODUCTS}>
      <div className="container">
        <Header />
        <div className="card" style={{ marginBottom: 12 }}>
          <TabBar tab={tab} onSelect={setTab} />
        </div>
        {tab === "menu" && <MenuPage />}
        {tab === "cart" && <CartPage />}
        {tab === "checkout" && <CheckoutPage />}
      </div>
    </ShopProvider>
  );
}
