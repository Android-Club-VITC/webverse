import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRouter } from "next/router";
import WardenNavBar from "@/Component/WardenNavBar";

function leave() {
  let Router = useRouter();
  let complaints = [];

  useEffect(async () => {
    if (sessionStorage.getItem("warden_token") === null) {
      Router.push("/warden/login");
      return;
    }

    try {
      let res = await axios
        .get("http://localhost:8000/api/v1/student/leave", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("student_token"),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          complaints = res.data.data;

          if (complaints.length === 0) {
            alert("No Leaves");
            document.querySelector(".complaints-list").innerHTML = "No Leaves";
            return;
          }
          document.querySelector(".complaints-list").innerHTML = "";

          complaints.forEach((complaint) => {
            let li = document.createElement("li");
            li.innerHTML = `
            <div>
              <div>
                status:${complaint.isApproved}
                <br />
                leave id:${complaint.id}
                <br />
                leave type:${complaint.leaveType}
              </div>    
            </div>
            `;
            document.querySelector(".complaints-list").appendChild(li);
          });
        });
    } catch (err) {
      console.log(err);
    }
  }, [complaints]);

  return (
    <div>
      <WardenNavBar></WardenNavBar>
      <ul
        className="complaints-list"
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "100px",
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      ></ul>
    </div>
  );
}
export default leave;
