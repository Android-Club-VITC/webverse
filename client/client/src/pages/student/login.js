import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { useRouter } from "next/router";

function login() {
  let router = useRouter();

  let props = {
    regNo: "",
    password: "",
  };

  function onClickSignIn(e) {
    e.preventDefault();
    router.push("/student/register");
  }

  async function onClickBtn(e) {
    e.preventDefault();

    if (props.regNo === "" || props.password === "") {
      alert("Please fill all the fields");
      return;
    }

    if (props.regNo.length !== 9) {
      alert("Registration Number should be of 9 digits");
      return;
    }

    if (props.password.length < 8) {
      alert("Password should be of atleast 8 characters");
      return;
    }

    try {
      const res = await axios
        .post("http://localhost:8000/api/v1/student/auth/login", {
          regNo: props.regNo,
          password: props.password,
        })
        .then((res) => {
          if (res.data.message === "Logged in successfully") {
            alert("Logged In Successfully");
          } else {
            alert("Log In Failed");
          }
          return res.data;
        });

      sessionStorage.setItem("student_token", res.token);
      router.push("/student/dashboard");
    } catch (err) {
      let error = await err;

      if (error.message.trim() === "Request failed with status code 404") {
        alert("Account not found.\nPlease Make a Account");
      }
    }
  }

  return (
    <div>
      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Registration Number
          </label>
          <div class="col-sm-10">
            <input
              onChange={(text) => {
                props.regNo = text.target.value;
              }}
              type="text"
              class="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              onChange={(text) => {
                props.password = text.target.value;
              }}
              type="password"
              class="form-control"
              id="inputPassword3"
            />
          </div>
        </div>

        <button type="submit" onClick={onClickBtn} class="btn btn-primary">
          Log In
        </button>
        <button
          onClick={onClickSignIn}
          style={{
            marginLeft: "10px",
          }}
          type="submit"
          class="btn btn-primary"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default login;
