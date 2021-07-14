import React from "react";

export const User: React.FC<any> = ({ user }) => {
  return (
    <div className="user card">
      <div className="card__header">
        <p className="user__name">{user.name}</p>
      </div>
      <p className="user__data">
        <span className="user__username card__username">{user.username}</span>{" "}
        <span className="user___email link">
          {user.email}
        </span>
      </p>
    </div>
  );
};
