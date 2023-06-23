import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRouter } from "next/router";
import "../../style/authStudentForm.css";

function auth() {
  useEffect(() => {
    document.querySelectorAll(".info-item .btn").forEach(function (element) {
      element.addEventListener("click", function () {
        document.querySelector(".container").classList.toggle("log-in");
      });
    });

    document
      .querySelectorAll(".container-form .btn")
      .forEach(function (element) {
        element.addEventListener("click", function () {
          document.querySelector(".container").classList.add("active");
        });
      });
  }, []);

  return (
    <div className="container">
      <div className="box"></div>
      <div className="container-forms">
        <div className="container-info">
          <div className="info-item">
            <div className="table">
              <div className="table-cell">
                <p>Have an account?</p>
                <div className="btn">Log in</div>
              </div>
            </div>
          </div>
          <div className="info-item">
            <div className="table">
              <div className="table-cell">
                <p>Don't have an account?</p>
                <div className="btn">Sign up</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-form">
          <div className="form-item log-in">
            <div className="table">
              <div className="table-cell">
                <input
                  name="Reg. no."
                  placeholder="Registration number"
                  type="text"
                />
                <input name="Password" placeholder="Password" type="Password" />
                <div className="btn">Log in</div>
              </div>
            </div>
          </div>
          <div className="form-item sign-up">
            <div className="table">
              <div className="table-cell">
                <input name="Name" placeholder="Name" type="text" />
                <input
                  name="Reg. no."
                  placeholder="Registration number"
                  type="text"
                />
                <input name="Username" placeholder="Block" type="text" />
                <input name="Password" placeholder="Password" type="Password" />
                <input name="" placeholder="Room number" type="text" />
                <div className="btn">Sign up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default auth;
