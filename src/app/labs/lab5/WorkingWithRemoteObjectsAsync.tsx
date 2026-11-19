"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Partial<client.Assignment>>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title ?? ""));
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div id="wd-working-with-remote-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input id="wd-async-assignment-title" className={input}
        value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <textarea id="wd-async-assignment-description" className={input}
        value={assignment.description ?? ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <input id="wd-async-assignment-due" type="date" className={input}
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      <label className="mb-2 block">
        <input id="wd-async-assignment-completed" type="checkbox" className="mr-1"
          checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        Completed
      </label>
      <button type="button" id="wd-async-update-assignment-title"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}>
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
