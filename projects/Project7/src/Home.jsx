import Style from "./styles/Style.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const nevigetor = useNavigate();
  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem("display")) || []);
  const [input, setInput] = useState({});
  //   const [edit, setEdit] = useState(false);
  //   const [id, setId] = useState("");

  //   const prams = useParams();

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  const handleDelete = (index) => {
    const temp = [...display];
    temp.splice(index, 1);
    setDisplay(temp);
  };

  const handleEdit = (index) => {
    // console.log(display[index]);

    setInput(display[index]);
    // setEdit(true);
    // setId(index);
  };

  //   const handleChange = (e) => {
  //     setInput({ ...input, [e.target.name]: e.target.value });
  //   };

  const handelAdd = () => {
    // console.log(display);
    nevigetor("/add");
  };
  return (
    <>
      <div className={Style.container}>
        <div className={Style.loginWrapTable}>
          <div className={Style.loginHtml}>
            <h1 className="text-4xl text-white text-center my-5">User Data</h1>
            <div className="flex justify-end">
              <button onClick={handelAdd} className="text-white border px-8 py-3 rounded-md bg-black">
                Add
              </button>
            </div>

            <table className={Style.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Password</th>
                  <th>Gender</th>
                  <th>Hobbies</th>
                  <th>Course</th>
                  <th>Address</th>
                  <th>Tool</th>
                </tr>
              </thead>
              <tbody>
                {display.map((user, index) => (
                  <tr key={index}>
                    <td>{user.uName}</td>
                    <td>{user.uEmail}</td>
                    <td>{user.uPass}</td>
                    <td>{user.uGender}</td>
                    <td>
                      {user.hobbies.uReadding ? "Reading " : ""}
                      {user.hobbies.uCycling ? "Cycling " : ""}
                      {user.hobbies.uTraveling ? "Traveling " : ""}
                    </td>
                    <td>{user.uCorse}</td>
                    <td>{user.uAddress}</td>
                    <td>
                      <button onClick={() => handleDelete(index)} className={Style.smButton}>
                        Delete
                      </button>
                      <button onClick={() => handleEdit(index)} className={Style.smButton}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
