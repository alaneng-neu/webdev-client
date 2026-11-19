"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "../Table";
import * as client from "../../../client";
import * as accountClient from "../../../../account/client";
import { useAccountContext, type User } from "../../../../account/AccountContext";

export default function People() {
  const { cid } = useParams();
  const courseId = String(cid);
  const { currentUser } = useAccountContext();
  const canManage = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    setUsers(await client.findUsersForCourse(courseId));
  }, [courseId]);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // The roster lists enrolled users only, so a new user is enrolled here right away
  const createUser = async () => {
    const user = await accountClient.createUser({
      firstName: "New",
      lastName: `User ${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    await client.enrollIntoCourse(user._id, courseId);
    setUsers([...users, user]);
  };

  return (
    <div>
      {canManage && (
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            id="wd-add-people"
            onClick={createUser}
            className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> People
          </button>
        </div>
      )}
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
