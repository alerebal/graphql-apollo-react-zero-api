import React from "react";
import { Link } from "react-router-dom";
import { Users } from "../components/Users";

function UsersPage() {
  return (
    <div className="text-center">
      <h1>Users</h1>
      <ul className="editUser">
        <li>
          <Link to="/createUser" className="link">
            Create an user
          </Link>
        </li>
        <li>
          <Link to="/updateUser" className="link">
            Update an user
          </Link>
        </li>
      </ul>
      <Users />
    </div>
  );
}

export default UsersPage;
