import { useQuery } from "@apollo/client";
import React from "react";

import { GET_USERS } from "../graphql/queries";
import { User } from "../interfaces/User";
import { User as UserComponent } from "../components/User";

// users list for Users Page
export const Users: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>An error: {error.message}</h2>;
  return (
    <ul className='users__list list'>
    {data.users.data.map((user: User) => (
      <li key={user.id}>
        <UserComponent user={user} /> 
      </li>
    ))}
    </ul>
  );
};

// users list for Posts Page
export const UsersList: React.FC<any> = ({userSelected}) => {
  const { loading, error, data} = useQuery(GET_USERS);

  if(loading) return <h2>Loading...</h2>
  if(error) return <h2>Error: {error.message}</h2>
  return (
    <ul className="users__posts__list">
      {data.users.data.map((user: User) => (
        <li key={user.id} className="users__posts__li">
          <p onClick={() => userSelected(user.id)}>{user.username} </p>
        </li> 
      ))}
    </ul>
  )
}