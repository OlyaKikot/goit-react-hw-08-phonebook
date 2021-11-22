import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import * as operations from "../../redux/auth/auth-operations";

import s from "../LoginView/LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Login page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </div>
  );
}
