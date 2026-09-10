"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}>
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        type="text"
        id="wd-your-first-name"
        placeholder="Alan"
        defaultValue="Alan"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        type="text"
        id="wd-your-last-name"
        placeholder="Eng"
        defaultValue="Eng"
      />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input type="password" id="wd-your-student-id" defaultValue="001234567" />
      <br />

      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={6}
        defaultValue="I would like to reinforce my web development skills."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-senior"
        defaultChecked
      />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-graduate" />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment status:</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="wd-your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-react"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-react">React</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-typescript"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-typescript">TypeScript</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-nodejs"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-nodejs">Node.js</label>
      <br />

      <label htmlFor="wd-your-major">Major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CY">Cybersecurity</option>
        <option value="EE">Electrical Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "NODE"]}>
        <option value="HTML">HTML & CSS</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="DB">Databases</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="eng.al@northeastern.edu"
        defaultValue="eng.al@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2026"
        min={2026}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        id="wd-your-start-date"
        defaultValue="2026-09-09"
        min="2023-01-01"
        max="2032-12-31"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited are you about this course (0-10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={7}
      />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
