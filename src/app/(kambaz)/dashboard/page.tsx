"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      setCourses(
        currentUser ? await client.findMyCourses() : await client.fetchAllCourses(),
      );
    };
    load();
  }, [currentUser, setCourses]);

  useEffect(() => {
    if (!showAllCourses) return;
    const load = async () => {
      setAllCourses(await client.fetchAllCourses());
    };
    load();
  }, [showAllCourses]);

  const run = async (action: () => Promise<void>) => {
    try {
      await action();
      setError("");
    } catch (e) {
      setError(axios.isAxiosError(e) ? e.response?.data?.message ?? e.message : String(e));
    }
  };
  const onAddCourse = () =>
    run(async () => {
      const newCourse = await client.createCourse(course);
      addCourse(newCourse);
      setAllCourses([...allCourses, newCourse]);
    });
  const onUpdateCourse = () =>
    run(async () => {
      const saved = await client.updateCourse(course);
      updateCourse(saved);
      setAllCourses(allCourses.map((c) => (c._id === saved._id ? saved : c)));
    });
  const onDeleteCourse = (courseId: string) =>
    run(async () => {
      await client.deleteCourse(courseId);
      deleteCourse(courseId);
      setAllCourses(allCourses.filter((c) => c._id !== courseId));
    });

  const onEnroll = (c: Course) =>
    run(async () => {
      await client.enrollIntoCourse("current", c._id);
      addCourse(c);
    });
  const onUnenroll = (courseId: string) =>
    run(async () => {
      await client.unenrollFromCourse("current", courseId);
      deleteCourse(courseId);
    });

  // The cache holds only the signed-in user's courses, so membership in it is enrollment
  const enrolledIn = (courseId: string) => courses.some((c) => c._id === courseId);
  const visibleCourses = currentUser && showAllCourses ? allCourses : courses;
  const fieldClass =
    "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between gap-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      {error && (
        <p id="wd-dashboard-error" className="mb-2 max-w-xl rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={`mt-2 ${fieldClass}`}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={fieldClass}
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className={fieldClass}
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
        placeholder="Course number"
      />
      <input
        type="date"
        className={`mb-3 ${fieldClass}`}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrollment={
              currentUser
                ? {
                    enrolled: enrolledIn(c._id),
                    enroll: () => onEnroll(c),
                    unenroll: () => onUnenroll(c._id),
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
