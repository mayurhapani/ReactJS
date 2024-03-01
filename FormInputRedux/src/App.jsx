import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./component/Form";
import Table from "./component/Table";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [userId, setUserId] = useState();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    if (isEdit) {
      dispatch({ type: "edit", data: input, id: userId });
    } else {
      return dispatch({ type: "add", data: input });
    }
  };

  const handleDelete = (id) => {
    return dispatch({ type: "delete", id: id });
  };

  const handleEdit = (id) => {
    // console.log(users[id]);
    setInput(users[id]);
    setIsEdit(true);
    setUserId(id);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {/* <Form />
          <Table /> */}

          <div className="col-6">
            <form onSubmit={handleSubmit} className="text-center">
              <h3 className="my-3"> Register User</h3>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={handleChange}
                  value={input ? input.name : ""}
                  className="form-control"
                  name="name"
                  id=""
                  placeholder="Your Name"
                />
                <label>Your Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  onChange={handleChange}
                  value={input ? input.email : ""}
                  className="form-control"
                  name="email"
                  id=""
                  placeholder="name@example.com"
                />
                <label>Email address</label>
              </div>
              <button type="submit">{isEdit ? "Update" : "Submit"}</button>
            </form>
          </div>

          <div className="col-6">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleEdit(index);
                        }}
                        className="btn btn-primary me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(index);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
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

export default App;
