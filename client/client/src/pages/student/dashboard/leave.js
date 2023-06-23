import StudentNavBar from "@/Component/StudentNavBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../../../style/StudentLeaveForm.css";

function leave() {
  let props = {
    leaveType: "any",
    leaveDate: "any",
    leaveTime: "any",
    leaveDuration: "any",
  };

  async function onClickBtn() {
    if (
      props.leaveDate === "" ||
      props.leaveType === "" ||
      props.leaveTime === "" ||
      props.leaveDuration === ""
    ) {
      alert("Please fill all the values");
      return;
    }

    try {
      let res = await axios
        .post("http://localhost:8000/api/v1/student/leave/", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("student_token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Success") {
            alert("leave created successfully");
          } else {
            alert("leave creation failed");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <StudentNavBar></StudentNavBar>
      <div class="user">
        <header class="user__header"></header>

        <form class="form">
          <div class="form__group">
            <input
              type="text"
              placeholder="leaveType"
              class="form__input"
              onChange={(text) => {
                props.leaveType = text.target.value;
              }}
            />
          </div>

          <div class="form__group">
            <input
              type="date"
              placeholder="leaveDate"
              class="form__input"
              onChange={(text) => {
                props.leaveDate = text.target.value;
              }}
            />
          </div>

          <div class="form__group">
            <input
              type="time"
              placeholder="leaveTime"
              class="form__input"
              onChange={(text) => {
                props.leaveTime = text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              placeholder="leaveDuration"
              class="form__input"
              onChange={(text) => {
                props.leaveDuration = text.target.value;
              }}
            />
          </div>

          <button class="btn" type="button">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default leave;
