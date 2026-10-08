"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const base = `/courses/${cid}`;
  const home = `${base}/home`;
  const modules = `${base}/modules`;
  const piazza = `${base}/piazza`;
  const zoom = `${base}/zoom`;
  const assignments = `${base}/assignments`;
  const quizzes = `${base}/quizzes`;
  const grades = `${base}/grades`;
  const people = `${base}/people`;

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");
  const linkClass = (path: string) =>
    isActive(path)
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      <Link href={home} id="wd-course-home-link" className={linkClass(home)}>
        Home
      </Link>
      <Link
        href={modules}
        id="wd-course-modules-link"
        className={linkClass(modules)}
      >
        Modules
      </Link>
      <Link
        href={piazza}
        id="wd-course-piazza-link"
        className={linkClass(piazza)}
      >
        Piazza
      </Link>
      <Link href={zoom} id="wd-course-zoom-link" className={linkClass(zoom)}>
        Zoom
      </Link>
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={linkClass(assignments)}
      >
        Assignments
      </Link>
      <Link
        href={quizzes}
        id="wd-course-quizzes-link"
        className={linkClass(quizzes)}
      >
        Quizzes
      </Link>
      <Link
        href={grades}
        id="wd-course-grades-link"
        className={linkClass(grades)}
      >
        Grades
      </Link>
      <Link
        href={`${people}/table`}
        id="wd-course-people-link"
        className={linkClass(people)}
      >
        People
      </Link>
      <Link
        href={home}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
