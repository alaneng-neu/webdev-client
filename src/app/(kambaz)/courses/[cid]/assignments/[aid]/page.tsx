"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === assignmentId && a.course === courseId),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: courseId },
  );
  const backToList = () => router.push(`/courses/${courseId}/assignments`);
  const save = () => {
    if (existing) {
      updateAssignment(assignment);
    } else {
      addAssignment(assignment);
    }
    backToList();
  };

  const fieldClass =
    "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm [font-family:inherit]";
  const rowClass = "mb-4 flex flex-col gap-1 md:flex-row md:gap-4";
  const rowLabelClass = "text-sm md:w-40 md:shrink-0 md:pt-2 md:text-right";
  const boxClass = "flex-1 rounded border border-neutral-300 p-4";
  const checkClass = "mb-3 flex items-center gap-2 text-sm";

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className={`${fieldClass} mb-1`}
      />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {existing ? assignment._id : "new"}
      </p>
      <textarea
        id="wd-description"
        rows={6}
        className={`${fieldClass} mb-6`}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />

      <div className={rowClass}>
        <label htmlFor="wd-points" className={rowLabelClass}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
          className={fieldClass}
        />
      </div>
      <div className={rowClass}>
        <label htmlFor="wd-group" className={rowLabelClass}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={fieldClass}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className={rowClass}>
        <label htmlFor="wd-display-grade-as" className={rowLabelClass}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="POINTS"
          className={fieldClass}
        >
          <option value="POINTS">Points</option>
          <option value="PERCENTAGE">Percentage</option>
        </select>
      </div>
      <div className={rowClass}>
        <label htmlFor="wd-submission-type" className={rowLabelClass}>
          Submission Type
        </label>
        <div className={boxClass}>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={`${fieldClass} mb-4`}
          >
            <option value="ONLINE">Online</option>
            <option value="NONE">No Submission</option>
            <option value="EXTERNAL_TOOL">External Tool</option>
          </select>
          <div className="mb-3 text-sm font-semibold">Online Entry Options</div>
          <div className={checkClass}>
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className={checkClass}>
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className={checkClass}>
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className={checkClass}>
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className={checkClass}>
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </div>
        </div>
      </div>
      <div className={rowClass}>
        <span className={rowLabelClass}>Assign</span>
        <div className={boxClass}>
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Alice"
            className={`${fieldClass} mb-4`}
          />
          <label
            htmlFor="wd-due-date"
            className="mb-1 block text-sm font-semibold"
          >
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className={`${fieldClass} mb-4`}
          />
          <div className="flex gap-2">
            <div className="min-w-0 flex-1">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block text-sm font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className={fieldClass}
              />
            </div>
            <div className="min-w-0 flex-1">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block text-sm font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className={fieldClass}
              />
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
        Sample notes
      </label>
      <textarea id="wd-ai-editor-notes" rows={3} className={fieldClass} />

      <hr className="my-6 border-0 border-t border-neutral-300" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={backToList}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900"
        >
          Cancel
        </button>
        {canEdit && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
