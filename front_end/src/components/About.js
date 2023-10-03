import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
  });
  console.log("at call about");
  const callAbout = async () => {
    try {
      console.log("in try");
      const res = await fetch("/about", {
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
      navigate("/signin");
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  return (
    <div>
      <div
        className="container mt-5 mb-3 border border-4 border-dark"
        style={{ height: "40rem" }}
      >
        <div className="ms-3 content">
          <h1 className="p-3 mb-3">About Page</h1>
          <form method="GET">
            <div className="col-md-6">
              <label>Your Name</label>
              <input
                type="text"
                disabled
                value={userData.name}
                className="form-control"
                name="name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                disabled
                value={userData.email}
                className="form-control"
                name="email"
              />
            </div>
            <div className="col-6 ">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                value={userData.phone}
                disabled
                className="form-control"
                name="phone"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Profession</label>
              <input
                type="text"
                disabled
                className="form-control"
                value={userData.work}
                name="work"
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
