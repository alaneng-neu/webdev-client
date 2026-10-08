import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

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
        defaultValue="A1 - ENV + HTML"
        className={`${fieldClass} mb-4`}
      />
      <textarea
        id="wd-description"
        rows={6}
        className={`${fieldClass} mb-6`}
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Vercel.`}
      />

      <div className={rowClass}>
        <label htmlFor="wd-points" className={rowLabelClass}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={fieldClass} />
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
            defaultValue="2026-09-27"
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
                defaultValue="2026-09-09"
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
                defaultValue="2026-09-27"
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
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
