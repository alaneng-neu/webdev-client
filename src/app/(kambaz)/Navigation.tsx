"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaFlask, FaInbox } from "react-icons/fa";

export default function KambazNavigation() {
  const pathname = usePathname();

  const idleTile =
    "block bg-black py-3 text-center text-sm text-white no-underline";
  const activeTile =
    "block bg-white py-3 text-center text-sm text-red-600 no-underline";
  const iconClass = "inline-block text-3xl text-red-600";

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 left-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block py-2 text-center"
      >
        <img
          src="/images/NEU.png"
          alt="Northeastern University"
          width={75}
          className="inline-block"
        />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={pathname.startsWith("/account") ? activeTile : idleTile}
      >
        <FaRegCircleUser className={iconClass} />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={pathname.startsWith("/dashboard") ? activeTile : idleTile}
      >
        <AiOutlineDashboard className={iconClass} />
        <br />
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        id="wd-course-link"
        className={pathname.startsWith("/courses") ? activeTile : idleTile}
      >
        <LiaBookSolid className={iconClass} />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={pathname.startsWith("/calendar") ? activeTile : idleTile}
      >
        <IoCalendarOutline className={iconClass} />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={pathname.startsWith("/inbox") ? activeTile : idleTile}
      >
        <FaInbox className={iconClass} />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className={pathname.startsWith("/labs") ? activeTile : idleTile}
      >
        <FaFlask className={iconClass} />
        <br />
        Labs
      </Link>
      <Link href="/labs" id="wd-ai-nav-help" className={idleTile}>
        <FaCircleQuestion className={iconClass} />
        <br />
        Help
      </Link>
    </nav>
  );
}
