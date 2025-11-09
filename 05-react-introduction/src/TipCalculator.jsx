import { useState } from "react";

const PRESETS = [15, 20, 25, 50, 75, "Custom"];

export default function TipCalculator() {
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState(20);
  const [custom, setCustom] = useState("");

  const percent =
    selected === "Custom" ? Number(custom) || 0 : Number(selected);

  const bill = Number(amount) || 0;
  const tip = (bill * percent) / 100;
  const total = bill + tip;

  const formatMoney = (n) =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <section className="card">
      <label className="field">
        <span>Bill amount</span>
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <div className="group">
        <span className="group-label">Tip</span>
        <div className="tip-grid">
          {PRESETS.map((p) => {
            const active = selected === p;
            return (
              <button
                key={p}
                type="button"
                className={`tip-btn ${active ? "active" : ""}`}
                onClick={() => setSelected(p)}
              >
                {p === "Custom" ? "Custom" : `${p}%`}
              </button>
            );
          })}
        </div>

        {selected === "Custom" && (
          <div className="custom-row">
            <input
              type="number"
              min="0"
              step="1"
              placeholder="%"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
            />
            <span>%</span>
          </div>
        )}

        {percent < 20 && percent > 0 && (
          <p className="micro">Most people tip 20% 😉</p>
        )}
      </div>

      <div className="results">
        <div className="line">
          <span>Tip ({percent || 0}%)</span>
          <strong>${formatMoney(tip)}</strong>
        </div>
        <div className="line total">
          <span>Total</span>
          <strong>${formatMoney(total)}</strong>
        </div>
      </div>
    </section>
  );
}
