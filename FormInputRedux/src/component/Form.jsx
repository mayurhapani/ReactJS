import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    // setInput({...input,})
  };
  return (
    <div className="col-6">
      <form onSubmit={handleSubmit} className="text-center">
        <h3 className="my-3"> Register User</h3>
        <div className="form-floating mb-3">
          <input type="text" onChange={handleChange} className="form-control" name="name" id="" placeholder="Your Name" />
          <label>Your Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" onChange={handleChange} className="form-control" name="email" id="" placeholder="name@example.com" />
          <label>Email address</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
