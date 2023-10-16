import React from "react";
import FormHoc from "../../../Common/Components/FormHoc/index";
function Register(props) {
  return (
    <div>
      <form onSubmit={props.handleRegister}>
        <input
          type={"text"}
          id="firstName"
          placeholder="enter firstName"
          {...props.register("firstName", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
        />
        {props.formError.firstname?.type === "required" && (
          <p>This field is required</p>
        )}

        <input
          type={"text"}
          id="lastName"
          placeholder="enter lastName"
          {...props.register("lastName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {props?.formError?.lastname?.type === "required" && (
          <p>This field is required </p>
        )}
        <input
          type={"text"}
          placeholder="enter email"
          id="email"
          {...props.register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
          })}
        />
        {props.formError?.email?.type === "required" && (
          <p>This field is required</p>
        )}
        {props.formError?.email?.type === "pattern" && (
          <p>Please enter a valid email address</p>
        )}

        <input
          type={"password"}
          placeholder="enter password"
          id="password"
          {...props.register("password", {
            required: true,
          })}
        />
        {props.formError?.email?.type === "required" && (
          <p>This field is required</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormHoc(Register);
