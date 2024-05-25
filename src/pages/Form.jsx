import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [FormData, setFromData] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    checkbox: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    checkbox: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFromData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setFromData({ ...FormData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };
    if (
      FormData.name.trim().length === 0 ||
      FormData.name == null ||
      FormData.name == undefined
    ) {
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }

    if (
      FormData.username.trim().length === 0 ||
      FormData.username == null ||
      FormData.username == undefined
    ) {
      newErrors.username = "Username is not correct";
    } else {
      newErrors.username = "";
    }

    if (
      FormData.mobile.trim().length === 0 ||
      FormData.mobile == null ||
      FormData.mobile == undefined
    ) {
      newErrors.mobile = "mobile is not correct";
    } else {
      newErrors.mobile = "";
    }

    if (
      FormData.email.trim().length === 0 ||
      FormData.email == null ||
      FormData.email == undefined
    ) {
      newErrors.email = "email is not correct";
    } else {
      newErrors.email = "";
    }

    if (!FormData.checkbox) {
      newErrors.checkbox = "Please accept the terms and conditions.";
    } else {
      newErrors.checkbox = "";
    }

    // setErrors = ({ ...newErrors });
    const updateErrors = (newErrors) => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...newErrors,
      }));
    };

    if (
      newErrors.name === "" &&
      newErrors.username === "" &&
      newErrors.mobile === "" &&
      newErrors.email === "" &&
      newErrors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(FormData));
      navigate("/Genere");
    } else {
      updateErrors(newErrors);
    }
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor:"black",
          height: "100vh",
          width: "50vw",
          position: "relative",
        }}
      >
        <p style={{
          position:"absolute",
          bottom:"20px",
          left:"20px",
          color:"white",
          fontSize:"4rem",
        }}
        >
          Discover new things on super app.
        </p>
      </div>
      <form
        style={{
          display: "flex",
          gap: "1rem",
          width: "50vw",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width:"40vw",
          justifyContent:"flex-start",
          alignItems: "center",
        }}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Name"
              style={{
                border: `1px solid ${errors.name.length > 0 ? "red" : "green"}`,
                borderRadius: "5px",
                padding:"2px 5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </div>

          <div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Username"
              style={{
                border: `1px solid ${
                  errors.username.length > 0 ? "red" : "green"
                }`,
                padding:"2px 5px",
                borderRadius: "5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.username}</p>
          </div>

          <div>
            <input
              type="number"
              name="mobile"
              id="mobile"
              onChange={handleChange}
              placeholder="Mobile"
              style={{
                border: `1px solid ${
                  errors.mobile.length > 0 ? "red" : "green"
                }`,
                borderRadius: "5px",
                padding:"2px 5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.mobile}</p>
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              style={{
                border: `1px solid ${
                  errors.email.length > 0 ? "red" : "green"
                }`,
                borderRadius: "5px",
                padding:"2px 5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.email}</p>
          </div>

          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={handleCheckbox}
              style={{
                border: `1px solid ${errors.checkbox ? "red" : "green"}`,
                borderRadius: "5px",
                padding:"2px 5px",
              }}
            />

            <label htmlFor="checkbox"
            style={{
              marginLeft: "15px",

            }}>
              I agree to the terms and conditions.
            </label>
            <p style={{ color: "red" }}>{errors.checkbox}</p>
          </div>
          <button type="submit"
          style={{ 
            padding:"10px 10px",
            borderRadius: "20px",
            backgroundColor:"green",
            color:"white",
            border:"none",
            cursor: "pointer",
            width:"20vw",
           }}
           >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
