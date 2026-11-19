"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../../account/client";
import { useAccountContext, type User } from "../../../account/AccountContext";

export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const { currentUser, setCurrentUser } = useAccountContext();
  const canManage = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!uid) return;
    const load = async () => {
      const found = await client.findUserById(uid);
      setUser(found);
      setName(`${found.firstName} ${found.lastName}`);
    };
    load();
  }, [uid]);

  const deleteUser = async (userId: string) => {
    await client.deleteUser(userId);
    onClose();
  };
  const saveUser = async () => {
    if (!user) return;
    // Everything after the first word is the last name, so multi-word last names survive
    const [firstName, ...rest] = name.trim().split(/\s+/);
    const updatedUser = { ...user, firstName, lastName: rest.join(" ") };
    const saved = await client.updateUser(updatedUser);
    if (saved._id === currentUser?._id) setCurrentUser(saved);
    setUser(saved);
    setEditing(false);
    onClose();
  };

  if (!uid) return null;
  return (
    <div className="wd-people-details fixed top-0 end-0 bottom-0 z-20 w-full max-w-sm overflow-y-auto bg-white p-4 shadow-lg">
      <button
        type="button"
        onClick={onClose}
        className="wd-close-details absolute end-2 top-2 border-0 bg-transparent p-0"
        aria-label="Close details"
      >
        <IoCloseSharp className="text-3xl" />
      </button>
      <div className="mt-2 text-center">
        <FaUserCircle className="inline text-8xl text-neutral-500" />
      </div>
      <hr className="my-3 border-0 border-t border-neutral-300" />
      {user && (
        <>
          <div className="mb-2 flex items-center gap-2 text-lg text-red-700">
            {editing ? (
              <input
                className="wd-edit-name min-w-0 flex-1 rounded border border-neutral-300 px-2 py-1 text-base text-neutral-900"
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveUser();
                }}
              />
            ) : (
              <span
                className="wd-name flex-1"
                onClick={() => canManage && setEditing(true)}
              >
                {user.firstName} {user.lastName}
              </span>
            )}
            {canManage &&
              (editing ? (
                <button
                  type="button"
                  onClick={saveUser}
                  aria-label="Save name"
                  className="border-0 bg-transparent p-0"
                >
                  <FaCheck className="wd-save text-green-600" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  aria-label="Edit name"
                  className="border-0 bg-transparent p-0"
                >
                  <FaPencilAlt className="wd-edit text-neutral-700" />
                </button>
              ))}
          </div>
          <b>Roles:</b> <span className="wd-roles">{user.role}</span>
          <br />
          <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
          <br />
          <b>Section:</b> <span className="wd-section">{user.section}</span>
          <br />
          <b>Total Activity:</b>{" "}
          <span className="wd-total-activity">{user.totalActivity}</span>
          <hr className="my-3 border-0 border-t border-neutral-300" />
          {canManage && user._id !== currentUser?._id && (
            <button
              type="button"
              onClick={() => deleteUser(user._id)}
              className="wd-delete float-end rounded border-0 bg-red-600 px-3 py-1 text-sm text-white"
            >
              Delete
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="wd-cancel float-end me-2 rounded border-0 bg-neutral-200 px-3 py-1 text-sm"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
