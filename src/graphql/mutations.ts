import {gql} from '@apollo/client';

export const CREATE_USER = gql`
    mutation($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
            username
            email
        }
    }
`;

export const UPDATE_USER = gql`
    mutation($id: ID!, $input: UpdateUserInput!) {
        updateUser(id: $id, input: $input) {
            id
            name
            username
            email
        }
    }
`;