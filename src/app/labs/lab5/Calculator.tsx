"use client";

import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};
const field = "rounded border border-neutral-300 px-3 py-1.5";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op = operation) => {
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    if (!response.ok) {
      setResult("");
      setError(data.error);
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator-next-web-api">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="mb-2 flex max-w-sm flex-col gap-2">
        <label className="flex items-center gap-2">
          A:
          <input id="wd-calculator-a" type="number" className={`${field} flex-1`}
            value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label className="flex items-center gap-2">
          B:
          <input id="wd-calculator-b" type="number" className={`${field} flex-1`}
            value={b} onChange={(e) => setB(e.target.value)} />
        </label>
        <label className="flex items-center gap-2">
          Operation:
          <select id="wd-calculator-operation" className={`${field} flex-1`}
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value);
              calculate(e.target.value);
            }}>
            {Object.entries(SYMBOLS).map(([op, symbol]) => (
              <option key={op} value={op}>{symbol}</option>
            ))}
          </select>
        </label>
        <button type="button" id="wd-calculator-calculate"
          className="self-start rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate()}>
          Calculate
        </button>
        <input id="wd-calculator-result" readOnly className={`${field} bg-neutral-50`}
          value={result} />
        {error && (
          <p id="wd-calculator-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
            {error}
          </p>
        )}
      </div>
      <hr />
    </div>
  );
}
