import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRouter } from "next/router";
import StudentNavBar from "@/Component/StudentNavBar";

function dashboard() {
  let props = {
    currentRoom: "",
  };

  let Router = useRouter();
  useEffect(async () => {
    if (sessionStorage.getItem("student_token") === null) {
      Router.push("/student/login");
    } else {
      try {
        console.log(sessionStorage.getItem("student_token"));
        // let res = await axios
        //   .get("http://localhost:8000/api/v1/student/me", {
        //     headers: {
        //       Authorization:
        //         "Bearer " + sessionStorage.getItem("student_token"),
        //     },
        //   })
        //   .then((res) => {
        //     props = res.data;
        //     return res.data;
        //   });

        let currentroom = await axios
          .get("http://localhost:8000/api/v1/student/room-details/", {
            headers: {
              Authorization:
                "Bearer " + sessionStorage.getItem("student_token"),
            },
          })
          .then((res) => {
            props.currentRoom = res.data.message;
            return res.data.message;
          });

        document.querySelector(".current-room").innerHTML = props.currentRoom;
      } catch (err) {
        console.log(err);
      }

      console.log(props);
    }
  }, []);

  return (
    <div>
      <StudentNavBar />

      <p>
        Room Details : <span className="current-room"></span>
      </p>
    </div>
  );
}

export default dashboard;
