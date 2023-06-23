import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/LandingStyle.css";

function index() {
  return (
    <div>
      <header>
        <div>
          <h1>HOSTEL MANAGEMENT</h1>
        </div>
      </header>

      <div class="card-container">
        <a
          href="student/dashboard"
          style={{
            textDecoration: "none",
          }}
          class="card"
        >
          <h2>Student</h2>
          <div>
            <img src="student.png" />
          </div>
        </a>
        <a
          href="faculty"
          style={{
            textDecoration: "none",
          }}
          class="card"
        >
          <h2>Faculty</h2>
          <div>
            <img src="teacher.png" />
          </div>
        </a>
        <a
          href="warden/dashboard"
          style={{
            textDecoration: "none",
          }}
          class="card"
        >
          <h2>Warden</h2>
          <div>
            <img src="warden.jpeg" alt="Warden Logo" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default index;
