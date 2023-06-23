import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRouter } from "next/router";
import WardenNavBar from "@/Component/WardenNavBar";

function dashboard() {
  let Router = useRouter();
  let complaints = [];

  useEffect(async () => {
    if (sessionStorage.getItem("warden_token") === null) {
      Router.push("/warden/login");
      return;
    }

    try {
      let res = await axios
        .get("http://localhost:8000/api/v1/student/complaint", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("student_token"),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          complaints = res.data.data;

          if (complaints.length === 0) {
            alert("No Complaints");
            document.querySelector(".complaints-list").innerHTML =
              "No Complaints";
            return;
          }
          document.querySelector(".complaints-list").innerHTML = "";

          complaints.forEach((complaint) => {
            let li = document.createElement("li");
            li.style.background = "linear-gradient(to right, #667eea, #764ba2)";
            li.innerHTML = `
            <div>
              <div>
                status:${complaint.isResolved}
                <br />
                complaint id:${complaint.id}
                <br />
                complaint type:${complaint.complaintType}
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

export default dashboard;
