import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Bruce Wayne
            </td>
            <td className="p-2">001234562S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-02</td>
            <td className="p-2">23:32:23</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Steve Rogers
            </td>
            <td className="p-2">001234563S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-02</td>
            <td className="p-2">13:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Natasha Romanoff
            </td>
            <td className="p-2">001234564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Thor Odinson
            </td>
            <td className="p-2">001234565S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-01</td>
            <td className="p-2">11:22:33</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Bruce Banner
            </td>
            <td className="p-2">001234566S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-01</td>
            <td className="p-2">22:33:44</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Frodo Baggins
            </td>
            <td className="p-2">001234567S</td>
            <td className="p-2">S101</td>
            <td className="p-2">FACULTY</td>
            <td className="p-2">2020-12-02</td>
            <td className="p-2">44:33:22</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Aragorn Elessar
            </td>
            <td className="p-2">001234568S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-12-04</td>
            <td className="p-2">12:23:34</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Legolas Greenleaf
            </td>
            <td className="p-2">001234569S</td>
            <td className="p-2">S101</td>
            <td className="p-2">FACULTY</td>
            <td className="p-2">2020-11-11</td>
            <td className="p-2">21:32:43</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Jane Sample
            </td>
            <td className="p-2">001234570S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-05</td>
            <td className="p-2">08:15:42</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Alex Sample
            </td>
            <td className="p-2">001234571S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-12-06</td>
            <td className="p-2">16:40:05</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
              Sam Sample
            </td>
            <td className="p-2">001234572S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-12-07</td>
            <td className="p-2">09:05:51</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
