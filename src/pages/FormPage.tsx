import { FormEvent, useState } from "react";

type LoginData = {
  username: string;
  password: string;
};

type FormState = {
  isError: boolean;
  isSuccess: boolean;
};

const FormPage = () => {
  const [data, setData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [formState, setFormState] = useState<FormState>({
    isError: false,
    isSuccess: false,
  });
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.clear;
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
      reset: () => void;
    };
    setData({ ...data, username: target.username.value });
    setData({ ...data, password: target.password.value });

    if (data.username === "root" && data.password === "admin") {
      setFormState({
        isError: false,
        isSuccess: true,
      });

      localStorage.setItem("login", btoa(data.username + data.password));
    } else {
      setFormState({
        isSuccess: false,
        isError: true,
      });
    }

    target.reset();
  };
  return (
    <div
      className="w-100"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Ini adalah halaman Form</p>

      <form className="col-md-3">
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="btn btn-primary" type="submit">
          Lakukan Login
        </button>
      </form>

      <p>Login Berhasil, silahkan cek Local Storage</p>

      <p>Login Gagal</p>
    </div>
  );
};

export default FormPage;
