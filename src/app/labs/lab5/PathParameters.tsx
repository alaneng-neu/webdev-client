"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
const button = "mr-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input id="wd-path-parameter-a" type="number" className={input}
        value={a} onChange={(e) => setA(e.target.value)} />
      <input id="wd-path-parameter-b" type="number" className={input}
        value={b} onChange={(e) => setB(e.target.value)} />
      <a id="wd-path-parameter-add" className={button}
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract" className={button}
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply" className={button}
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} &times; {b}
      </a>
      <a id="wd-path-parameter-divide" className={button}
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} &divide; {b}
      </a>
      <hr />
    </div>
  );
}
