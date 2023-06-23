import StudentNavBar from "@/Component/StudentNavBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../../../style/StudentEventForm.css";

function event() {
  let props = {
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    eventOrganiser: "",
    participantCount: 0,
    hostedBy: "",
    eventPoster: "",
  };

  async function onClickBtn(e) {
    e.preventDefault();
    if (
      props.eventName === "" ||
      props.eventDescription === "" ||
      props.eventDate === "" ||
      props.eventTime === "" ||
      props.eventVenue === "" ||
      props.eventOrganiser === "" ||
      props.participantCount === "" ||
      props.hostedBy === "" ||
      props.eventPoster === ""
    ) {
      alert("Please fill all the values");
      return;
    }
    try {
      let res = await axios
        .post("http://localhost:8000/api/v1/student/event/", props, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("student_token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Success") {
            alert("event created successfully");
          } else {
            alert("event creation failed");
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
              onChange={(text) => {
                props.eventName = text.target.value;
              }}
              placeholder="event name"
              class="form__input"
            />
          </div>

          <div class="form__group">
            <input
              type="text"
              placeholder="event description"
              class="form__input"
              onChange={(text) => {
                props.eventDescription = text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <input
              type="date"
              placeholder="event date"
              onChange={(text) => {
                props.eventDate = text.target.value;
              }}
              class="form__input"
            />
          </div>
          <div class="form__group">
            <input
              type="time"
              placeholder="event time"
              onChange={(text) => {
                props.eventTime = text.target.value;
              }}
              class="form__input"
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              placeholder="event venue"
              onChange={(text) => {
                props.eventVenue = text.target.value;
              }}
              class="form__input"
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              placeholder="event organiser"
              class="form__input"
              onChange={(text) => {
                props.eventOrganiser = text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <input
              type="number"
              placeholder="participant count"
              class="form__input"
              onChange={(text) => {
                props.participantCount = +text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              placeholder="hosted by"
              class="form__input"
              onChange={(text) => {
                props.hostedBy = text.target.value;
              }}
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              placeholder="event poster"
              onChange={(text) => {
                props.eventPoster = text.target.value;
              }}
              class="form__input"
            />
          </div>
          <button class="btn" type="button" onClick={onClickBtn}>
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default event;
