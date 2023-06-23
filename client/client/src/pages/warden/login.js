import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { useRouter } from "next/router";

function login() {
  let router = useRouter();

  let props = {
    block: "",
    password: "",
  };

  async function onClickBtn(e) {
    e.preventDefault();

    if (props.block === "" || props.password === "") {
      alert("Please fill all the fields");
      return;
    }

    if (props.block.length !== 1) {
      alert("Invalid Block");
      return;
    }

    if (props.password.length < 8) {
      alert("Password should be of atleast 8 characters");
      return;
    }

    try {
      const res = await axios
        .post("http://localhost:8000/api/v1/warden/auth/login", {
          block: props.block,
          password: props.password,
        })
        .then((res) => {
          return res;
        });

      if (res.data.message === "Warden Logged In") {
        alert("Logged In Successfully");
      } else {
        alert("Log In Failed");
        throw new Error("Log In Failed");
      }

      sessionStorage.setItem("warden_token", res.data.token);
      router.push("/warden/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Block
          </label>
          <div class="col-sm-10">
            <input
              onChange={(text) => {
                props.block = text.target.value;
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
        <div>
          <button type="submit" onClick={onClickBtn} class="btn btn-primary">
            Log In
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default login;
