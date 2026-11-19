"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
const button = "mr-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input id="wd-query-parameter-a" type="number" className={input}
        value={a} onChange={(e) => setA(e.target.value)} />
      <input id="wd-query-parameter-b" type="number" className={input}
        value={b} onChange={(e) => setB(e.target.value)} />
      <a id="wd-query-parameter-add" className={button}
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract" className={button}
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply" className={button}
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} &times; {b}
      </a>
      <a id="wd-query-parameter-divide" className={button}
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} &divide; {b}
      </a>
      <hr />
    </div>
  );
}
