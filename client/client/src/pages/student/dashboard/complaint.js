import React from "react";
import StudentNavBar from "@/Component/StudentNavBar";
import "../../../style/StudentComplaintForm.css";
import { useEffect } from "react";
import axios from "axios";

function complaint() {
  let props = {
    complaintType: "any",
    complaintDate: "any",
    complaintDescription: "any",
    complaintSeverity: "any",
  };

  async function onClickBtn(e) {
    e.preventDefault();
    if (
      props.complaintDate === "" ||
      props.complaintType === "" ||
      props.complaintDescription === "" ||
      props.complaintSeverity === ""
    ) {
      alert("Please fill all the values");
      return;
    }

    try {
      let res = await axios
        .post("http://localhost:8000/api/v1/student/complaint/", props, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("student_token"),
          },
        })
        .then((res) => {
          console.log(res.data);
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
            <select
              class="form__input"
              onChange={(text) => {
                props.complaintType = text.target.value;
              }}
            >
              <option value="">Select complaint type</option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Hostel">Hostel</option>\
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="form__group">
            <input
              type="text"
              placeholder="complaint date"
              class="form__input"
              onChange={(text) => {
                props.complaintDate = text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              placeholder="complaint description"
              class="form__input"
              onChange={(text) => {
                props.complaintDescription = text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <select
              class="form__input"
              onChange={(text) => {
                props.complaintSeverity = text.target.value;
              }}
            >
              <option value="">Select complaint severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button class="btn" type="button" onClick={onClickBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default complaint;
