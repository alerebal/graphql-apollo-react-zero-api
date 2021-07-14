import React, { useState } from "react";
import { Posts } from "../components/Posts";
import { User_Posts } from "../components/UserPosts";
import { UsersList } from '../components/Users';

function PostsPage() {
  const [id, setId] = useState(0);
  const userSelected = (e: number) => {
      setId(e)
  }
  return (
    <>
      <h1 className="text-center">Posts</h1>
      <div className="postsContainer">
        <div className="usersList">
            <UsersList userSelected={(e: number) => userSelected(e)}/> 
        </div>
        <div className="postsList ">
            {id ? <User_Posts id={id} /> : <Posts />}
        </div>
      </div>
    </>
  );
}

export default PostsPage;
