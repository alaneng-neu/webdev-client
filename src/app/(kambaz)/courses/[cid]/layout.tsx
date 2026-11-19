"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";
import { useAccountContext } from "../../account/AccountContext";
import * as client from "../client";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const course = courses.find((c) => c._id === courseId);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const [fetched, setFetched] = useState(false);
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const allowed = !currentUser || !!course;

  // A reload lands here with an empty cache; otherwise keep the Dashboard's cache
  useEffect(() => {
    if (course || fetched) return;
    const load = async () => {
      try {
        setCourses(
          currentUser ? await client.findMyCourses() : await client.fetchAllCourses(),
        );
      } finally {
        setFetched(true);
      }
    };
    load();
  }, [course, fetched, currentUser, setCourses]);

  useEffect(() => {
    if (fetched && !allowed) router.replace("/dashboard");
  }, [fetched, allowed, router]);

  if (!course && !fetched) return null;
  if (!allowed) return null;

  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
        <span className="ms-2 text-base text-neutral-500">({course?._id})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
