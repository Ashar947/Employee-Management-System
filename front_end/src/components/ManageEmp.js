import React, { useEffect, useState } from "react";
import {Link , useNavigate } from "react-router-dom";


function ManageEmp() {
  const navigate = useNavigate();
  const [empData, setEmpData] = useState([]);
  console.log("at func");
  const callmanageEmp = async () => {
    try {
      console.log("in try");
      const res = await fetch("/manageemp", {
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
      setEmpData(data);
      console.log(data);
      console.log(empData);
      if (res.status !== 200) {
        console.log("in error");
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("Shoot at error");
      console.log(error);
      window.alert("User must be logged in");
      navigate("signin");
    }
  };

  useEffect(() => {
    callmanageEmp();
  }, []);
  // const handleUpdate=async(_id)=>{
  //   const del = fetch(`/editEmp/${_id}`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     }).then(async(res)=>{
  //       console.log(res.status)
  //       if (res.status === 201) {
  //           window.alert("User Updated");
  //           const res = await fetch("/manageemp", {
  //               method: "GET",
  //               headers: {
  //                 Accept: "application/json",
  //                 "Content-Type": "application/json",
  //               },
  //               credentials: "include",
  //             });
  //             const data = await res.json();
  //             console.log("Data get is");
  //             console.log(`${res.status} STATUS`);
  //             setEmpData(data);
  //             console.log(data);
  //             console.log(empData);
  //             if (res.status !== 200) {
  //               console.log("in error");
  //               const error = new Error(res.error);
  //               throw error;
  //             }
  //           console.log("User updated");
  //       }else{
  //           window.alert("User not updated");
  //           console.log("User not updated");
  //       }

  //     })
      

  // }
  const handleDelete=async(_id)=>{
    const del = fetch(`/deleteEmp/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then(async(res)=>{
        console.log(res.status)
        if (res.status === 201) {
            window.alert("User deleted");
            const res = await fetch("/manageemp", {
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
              setEmpData(data);
              console.log(data);
              console.log(empData);
              if (res.status !== 200) {
                console.log("in error");
                const error = new Error(res.error);
                throw error;
              }
            console.log("User deleted");
        }else{
            window.alert("User not deleted");
            console.log("User not deleted");
        }

      })
      

  }

  return (
    <div>
      <h1>Manage Employee Page</h1>
      <div className="table-main">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Profession</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((emp,index)=>{
                return <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.work}</td>
                <td><Link to={`/editEmp/${emp._id}`}  class="btn btn-primary">Update</Link><button onClick={e=> handleDelete(emp._id)} class="btn btn-danger">Delete</button></td>
              </tr>

            })}
            {/*  */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageEmp;
