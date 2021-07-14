import { gql } from "@apollo/client";

// Users

// get users
export const GET_USERS = gql`
  query ($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        username
        email
      }
    }
  }
`;

// Posts

// get posts
export const GET_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          id
          name
          username
          email
        }
      }
    }
  }
`;

// get user's posts
export const GET_USER_POSTS = gql`
  query($id: ID!) {
    user(id: $id) {
      posts {
        data {
          id
          title
          body
          user {
            id
            name
            username
            email
          }
        }
      }
    }
  }
`;
