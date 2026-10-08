import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <div className="flex">
        <div className="w-48">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
