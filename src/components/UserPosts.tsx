import { useQuery } from '@apollo/client';
import React from 'react'

import {GET_USER_POSTS} from '../graphql/queries';
import {Post} from '../interfaces/Post';
import {Post as PostComponent} from '../components/Post';

export const User_Posts: React.FC<any> = ({id}) => {
    const {loading, error, data} = useQuery(GET_USER_POSTS,{
        variables: {
            id
        }
    });
    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Error: {error.message}</h3>
    return (
        <>
            <ul className="posts__list list">
                {data.user.posts.data.map((post: Post) => {
                    return <li key={post.id}><PostComponent post={post}/></li>
                })}
            </ul>
        </>
    )
}

