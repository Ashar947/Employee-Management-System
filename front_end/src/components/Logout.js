import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
        navigate("/signin");
        if (res.status !== 200) {
            const error = new Error(res.error);
            throw error;
          }
    }).catch((error)=>{
        console.log("Shoot at error");
        console.log(error);
      });
  });
  return <>Logout Page</>;
}

export default Logout;
