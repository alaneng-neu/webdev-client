import Link from "next/link";
import { FaCheckCircle, FaFileAlt, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete?: () => void;
}) {
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <div className="flex shrink-0 items-center gap-2 text-lg">
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="wd-delete-assignment-click text-red-600"
            aria-label={`Delete ${title}`}
          >
            <FaTrash />
          </button>
        )}
        <FaCheckCircle className="text-green-600" />
        <IoEllipsisVertical />
      </div>
    </li>
  );
}
