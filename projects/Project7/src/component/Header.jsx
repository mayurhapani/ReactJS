import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link className="me-5" to={"/"}>
        Home
      </Link>
      <Link className="me-5" to={"/add"}>
        ADD
      </Link>
      {/* <Link className="me-5" to={`/edit`}>
        EDIT
      </Link> */}
    </div>
  );
}
