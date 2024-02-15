import Style from "./styles/Style.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Add() {
  const nevigetor = useNavigate();
  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem("display")) || []);
  const [input, setInput] = useState({});
  const [edit, setEdit] = useState(false);

  // const prams = useParams();

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.name.hobbies.checked.input);
    const hobbies = [];
    // console.log(e.target.readding.checked);
    if (e.target.readding.checked) {
      hobbies.push(e.target.readding.value);
    }
    if (e.target.cycling.checked) {
      hobbies.push(e.target.cycling.value);
    }
    if (e.target.traveling.checked) {
      hobbies.push(e.target.traveling.value);
    }

    const {
      user: { value: user },
      email: { value: email },
      pass: { value: pass },
      gender: { value: gender },
      corse: { value: corse },
      address: { value: address },
    } = e.target;

    console.log(user, email, pass, gender, hobbies, corse, address);
    // console.log(hobbies.includes("Reading"));
  };

  return (
    <>
      <div className={Style.container}>
        <div className={Style.loginWrap}>
          <div className={Style.loginHtml}>
            <h2 className={Style.tab}>Sign In</h2>

            <div className={Style.loginForm}>
              <form onSubmit={handleSubmit} className={Style.signInHtm}>
                <div className={Style.group}>
                  <label className={Style.label}>Your Name</label>
                  <input
                    id="user"
                    type="text"
                    className={Style.input}
                    value={input ? input.user : ""}
                    onChange={handleChange}
                    name="user"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Email Id</label>
                  <input
                    id="email"
                    type="email"
                    className={Style.input}
                    value={input ? input.email : ""}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Choose Password</label>
                  <input
                    id="pass"
                    type="password"
                    className={Style.input}
                    value={input ? input.pass : ""}
                    onChange={handleChange}
                    name="pass"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Gender</label>
                  <input name="gender" type="radio" value="male" checked={input.gender === "male" ? true : false} onChange={handleChange} />
                  <label htmlFor="male" className="ps-2 pe-20">
                    Male
                  </label>
                  <input
                    name="gender"
                    type="radio"
                    value={"female"}
                    checked={input.gender === "female" ? true : false}
                    // checked={input ? input.uGender === "female" : false}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="ps-2">
                    Female
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Hobbies</label>
                  <input
                    id="readding"
                    name="hobbies"
                    value={"Reading"}
                    type="checkbox"
                    onChange={handleChange}
                    checked={input.hobbies.includes("Reading") ? true : false}
                  />
                  <label htmlFor="readding" className="ps-2 pe-10">
                    Reading
                  </label>
                  <input
                    id="cycling"
                    name="hobbies"
                    value={"Cycling"}
                    type="checkbox"
                    onChange={handleChange}
                    checked={input.hobbies.includes("Cycling") ? true : false}
                  />
                  <label htmlFor="cycling" className="ps-2 pe-10">
                    Cycling
                  </label>
                  <input
                    id="traveling"
                    name="hobbies"
                    value={"Traveling"}
                    type="checkbox"
                    onChange={handleChange}
                    checked={input.hobbies.includes("Traveling") ? true : false}
                  />
                  <label htmlFor="traveling" className="ps-2">
                    Traveling
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Select Course</label>
                  <select id="corse" className={Style.checkLabel} onChange={handleChange} name="Corse">
                    <option value="PHP" className={Style.checkInput}>
                      PHP
                    </option>
                    <option value="Full Stack" className={Style.checkInput}>
                      Full Stack
                    </option>
                    <option value="Flutter" className={Style.checkInput}>
                      Flutter
                    </option>
                    <option value="Front End" className={Style.checkInput}>
                      Front End
                    </option>
                  </select>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Your Address</label>
                  <textarea id="address" className={Style.input} rows="3" onChange={handleChange} name="address"></textarea>
                </div>
                <div className={Style.group}>
                  <input type="submit" className={Style.button} value={edit ? "Edit" : "Register"} />
                </div>
                <div className={Style.hr}></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
