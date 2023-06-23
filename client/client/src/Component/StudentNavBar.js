import React from "react";
import "../style/StudentDashboardNavBar.css";
import Link from "next/link";

function StudentNavBar() {
  return (
    <div>
      <nav class="navbar">
        <div
          class="navdiv"
          style={{
            width: "100%",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <li>
                <Link href="/">Hostel</Link>
              </li>
              <li>
                <Link href="complaint">Complaints</Link>
              </li>
              <li>
                <Link href="dashboard/leave">Leave</Link>
              </li>
              <li>
                <Link href="Courses">Courses</Link>
              </li>
              <li>
                <Link href="event">Events</Link>
              </li>
            </div>
            <div>
              <button>
                <a href="student/dashboard/Profile">PROFILE</a>
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default StudentNavBar;
