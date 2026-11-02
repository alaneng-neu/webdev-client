"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

const LABELS = { signin: "Signin", signup: "Signup", profile: "Profile" } as const;

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  const linkClass = (path: string) =>
    pathname === path
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          id={`wd-account-${link}-link`}
          className={linkClass(`/account/${link}`)}
        >
          {LABELS[link]}
        </Link>
      ))}
    </div>
  );
}
