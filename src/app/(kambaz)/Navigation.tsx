"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaFlask, FaInbox } from "react-icons/fa";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
  { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: FaFlask },
  { label: "History", path: "/history", icon: IoCalendarOutline },
] as const;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = pathname.includes("/account");

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
        className={accountActive ? activeTile : idleTile}
      >
        <FaRegCircleUser className={iconClass} />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active =
          link.label === "Courses"
            ? pathname.includes("/courses")
            : pathname.includes(link.path);
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={`wd-${link.label.toLowerCase()}-link`}
            className={active ? activeTile : idleTile}
          >
            <Icon className={iconClass} />
            <br />
            {link.label}
          </Link>
        );
      })}
      <Link href="/labs" id="wd-ai-nav-help" className={idleTile}>
        <FaCircleQuestion className={iconClass} />
        <br />
        Help
      </Link>
    </nav>
  );
}
