import { BiImport } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { IoNotificationsOutline, IoStatsChart } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt, MdOutlineAutoAwesome } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseStatus() {
  const actionClass =
    "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
  const iconClass = "me-2 shrink-0 text-base";

  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={actionClass}>
        <BiImport className={iconClass} /> Import Existing Content
      </button>
      <button type="button" className={actionClass}>
        <LiaFileImportSolid className={iconClass} /> Import from Commons
      </button>
      <button type="button" className={actionClass}>
        <PiTarget className={iconClass} /> Choose Home Page
      </button>
      <button type="button" className={actionClass}>
        <IoStatsChart className={iconClass} /> View Course Stream
      </button>
      <button type="button" className={actionClass}>
        <TfiAnnouncement className={iconClass} /> New Announcement
      </button>
      <button type="button" className={actionClass}>
        <IoStatsChart className={iconClass} /> New Analytics
      </button>
      <button type="button" className={actionClass}>
        <IoNotificationsOutline className={iconClass} /> View Course
        Notifications
      </button>
      <button type="button" id="wd-ai-status" className={actionClass}>
        <MdOutlineAutoAwesome className={iconClass} /> Sample action
      </button>
    </div>
  );
}
