import React from "react";
import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";



export const CreateUser = () => {
  let name: any;
  let username: any;
  let email: any;

  const [addUser] = useMutation(CREATE_USER);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser({
            variables: {
              input: {
                name: name.value,
                username: username.value,
                email: email.value,
              },
            },
          });
          alert(`
            User created:
            Name: ${name.value}
            User Name: ${username.value}
            Email: ${email.value}
          `);
        }
      }
      >
        <input ref={(node) => (name = node)}
          placeholder="Name"
        />
        <input ref={(node) => (username = node)} 
          placeholder="User name"
        />
        <input ref={(node) => (email = node)} 
          placeholder="Em@il"
        />
        <br />
        <button>Add User</button>
      </form>
    </>
  );
};





