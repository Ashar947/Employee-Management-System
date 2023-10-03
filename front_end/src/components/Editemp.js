import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Editemp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    work: "",
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  let url = window.location.pathname;
  const parts = url.split("/");
  const id = parts.at(-1);
  const getEmpData = async () => {
    try {
      console.log("in try");
      let url = window.location.pathname;
      const parts = url.split("/");
      const id = parts.at(-1);
      const res = await fetch(window.location.pathname, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log("Data get is");
      console.log(`${res.status} STATUS`);
      setUserData(data);
      if (!(res.status === 200)) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("Shoot at error");
      console.log(error);
      //   navigate("/signin");
    }
  };
  const registerData = async (event) => {
    event.preventDefault();
    const { name, email, phone, work } = userData;
    console.log(`Name is ${name} , email ${email} phone ${phone} work ${work}`);
    const res = await fetch(`/editEmp/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        work: userData.work,
      }),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 201) {
        window.alert("updated");
        console.log("updated");
        navigate('/manageemp')
      } else if (response.status === 201) {
        window.alert("User Registered");
        console.log("User Registered");
        navigate("/signin");
      } else if (response.status === 404) {
        window.alert("not changes");
        console.log("not changed");
      } else {
        window.alert("new error");
        console.log("nre erro");
      }
    });
  };

  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <div>
      <div
        className="container mt-5 mb-3 border border-4 border-dark"
        style={{ height: "40rem" }}
      >
        <div className="ms-3 content">
          <h1 className="p-3 mb-3">About Page</h1>
          <form method="PUT">
            <div className="col-md-6">
              <label>Your Name</label>
              <input
                type="text"
                value={userData.name}
                onChange={handleChange}
                className="form-control"
                name="name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={handleChange}
                className="form-control"
                name="email"
              />
            </div>
            <div className="col-6 ">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                value={userData.phone}
                onChange={handleChange}
                className="form-control"
                name="phone"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Profession</label>
              <input
                type="text"
                className="form-control"
                value={userData.work}
                onChange={handleChange}
                name="work"
                autoComplete="off"
              />
            </div>
            <div className="col-12 mt-3 mb-3">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
                onClick={registerData}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editemp;
