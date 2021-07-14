import { useQuery } from '@apollo/client';
import React from 'react'

import {GET_POSTS} from '../graphql/queries';
import {Post} from '../interfaces/Post';
import {Post as PostComponent} from '../components/Post';


export const Posts: React.FC<any> = () => {
    const {loading, error, data} = useQuery(GET_POSTS, {
        variables: {
            options: {
                paginate: {
                    limit: 25
                }
            }
        }
    });
    if(loading) return <h3 >loading...</h3>
    if(error) return <h3>error: {error.message}</h3>
    
    return (
        <>
            <ul className='posts__list list'>
                {data.posts.data.map((post: Post) => (
                    <li key={post.id}>
                        <PostComponent post={post}/>
                    </li>
                ))}
            </ul>
        </>
    )
    
    
}