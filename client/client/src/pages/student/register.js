import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRouter } from "next/router";

function signIn() {
  let router = useRouter();
  let props = {
    name: "",
    regNo: "",
    password: "",
    roomNo: "",
    block: "",
  };

  function onClickLogIn(e) {
    e.preventDefault();
    router.push("/student/login");
  }
  async function onClickButton(e) {
    e.preventDefault();

    if (
      props.name === "" ||
      props.regNo === "" ||
      props.password === "" ||
      props.roomNo === "" ||
      props.block === ""
    ) {
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

    if (props.block.length !== 1) {
      alert("Invalid Block");
      return;
    }

    try {
      const res = await axios
        .post("http://localhost:8000/api/v1/student/auth/register", {
          name: props.name,
          regNo: props.regNo,
          password: props.password,
          roomNo: props.roomNo,
          block: props.block,
        })
        .then((res) => {
          if (res.data.message === "Student Registered") {
            alert("Registration Successful");
          } else {
            alert("Registration Failed");
          }
        });

      router.push("/student/login");
    } catch (err) {
      console.log(err);
      return;
    }

    console.log(props);
  }

  return (
    <div>
      <form class="row g-3">
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Name
          </label>
          <input
            onChange={(text) => {
              props.name = text.target.value;
            }}
            type="text"
            class="form-control"
            id="inputAddress"
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Registration Number
          </label>
          <input
            onChange={(text) => {
              props.regNo = text.target.value;
            }}
            type="text"
            class="form-control"
            id="inputEmail4"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            onChange={(text) => {
              props.password = text.target.value;
            }}
            type="password"
            class="form-control"
            id="inputPassword4"
          />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Room No.
          </label>
          <input
            onChange={(text) => {
              props.roomNo = text.target.value;
            }}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>

        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Block
          </label>
          <input
            onChange={(text) => {
              props.block = text.target.value;
            }}
            type="text"
            class="form-control"
            id="inputZip"
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button onClick={onClickButton} type="submit" class="btn btn-primary">
            Sign in
          </button>
          <button
            onClick={onClickLogIn}
            style={{
              marginLeft: "10px",
            }}
            type="submit"
            class="btn btn-primary"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default signIn;
