import { useMemo, useState } from "react";
import { UNITS, convert, format } from "./lib/temperature";
import GoogleAd from "./components/GoogleAd";
import "./App.css";

export default function App() {
  const [fromUnit, setFromUnit] = useState("F");
  const [toUnit, setToUnit] = useState("C");
  const [input, setInput] = useState("32");

  const result = useMemo(() => convert(input, fromUnit, toUnit), [input, fromUnit, toUnit]);
  const unitSuffix = UNITS.find(u => u.key === toUnit)?.label.match(/\((.*?)\)/)?.[1] || "";

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ThermoSwap</h1>
        <p>Convert Fahrenheit, Celsius, Kelvin, and Rankine instantly.</p>
      </header>

      {/* Bloco de entrada */}
      <section className="block input-block">
        <label htmlFor="value">Enter a temperature</label>
        <input
          id="value"
          type="number"
          inputMode="decimal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 32"
        />
      </section>

      {/* Bloco de seleção */}
      <section className="block units-block">
        <div>
          <label htmlFor="from">From</label>
          <select id="from" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {UNITS.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="to">To</label>
          <select id="to" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {UNITS.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
      </section>

      {/* Bloco de resultado */}
      <section className="block result-block">
        <h2>Result</h2>
        <div className="result-box">
          {format(result, toUnit)} {unitSuffix}
        </div>
      </section>

      {/* Bloco de ações */}
      <section className="block actions-block">
        <button onClick={() => { setFromUnit(toUnit); setToUnit(fromUnit); }}>
          Swap units
        </button>
      </section>

      {/* Anúncios */}
      <section className="block ads-block">
        <GoogleAd />
      </section>

      <footer className="app-footer">
        <small>Built for everyday use in the U.S., with scientific precision.</small>
      </footer>
    </div>
  );
}
