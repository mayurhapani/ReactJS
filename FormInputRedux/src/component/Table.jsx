import React from "react";

export default function Table() {
  return (
    <div className="col-6">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nmae</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>John</td>
              <td>email</td>
              <td>
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}
