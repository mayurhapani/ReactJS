import Style from "../styles/Style.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const nevigetor = useNavigate();
  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem("display")) || []);

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  const handleDelete = (index) => {
    const temp = [...display];
    temp.splice(index, 1);
    setDisplay(temp);
  };

  const handleEdit = (index) => {
    nevigetor(`/edit/${index}`);
  };

  const handelAdd = () => {
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
                    <td>{user.user}</td>
                    <td>{user.email}</td>
                    <td>{user.pass}</td>
                    <td>{user.gender}</td>
                    <td>
                      {user.hobbies.map((hobby) => {
                        return hobby + ", \n";
                      })}
                    </td>
                    <td>{user.corse}</td>
                    <td>{user.address}</td>
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
