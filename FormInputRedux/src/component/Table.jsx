import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Table() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  // console.log(users);

  const handleDelete = (id) => {
    return dispatch({ type: "delete", id: id });
  };

  const handleEdit = (id) => {
    // console.log(users[id]);
    setInput(users[id]);
    // setIsEdit(true);
    return dispatch({ type: "edit", id: id });
  };

  return (
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
  );
}
