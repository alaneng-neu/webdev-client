import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="flex">
      <div className="flex-1">
        <Modules />
      </div>
      <div>
        <CourseStatus />
      </div>
    </div>
  );
}
