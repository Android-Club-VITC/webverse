import React from "react";
import "../style/StudentDashboardNavBar.css";
import Link from "next/link";

function WardenNavBar() {
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
                <Link href="">Complaints</Link>
              </li>
              <li>
                <Link href="dashboard/leave">Leaves</Link>
              </li>

              <li>
                <Link href="dashboard/event">Events</Link>
              </li>
            </div>
            <div>
              <button>
                <Link href="student/dashboard/Profile">PROFILE</Link>
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default WardenNavBar;
