import React from 'react'
import "./post.css";
import Post from '../post/Post.js';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios.js';

function Posts({ userId }) {

    const { isLoading, error, data = [] } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
            makeRequest.get("/posts?userId=" + userId).then((res) => res.data),

    })
    /*
    const { isLoading, error, data } = useQuery(['posts'], () =>
        makeRequest.get("/posts").then((res) => {
            return res.data;
        })
    )
*/
    return (
        <div className='posts'>
            {error ? "Something went Wrong"
                : isLoading
                    ? "Loading"
                    : data.map(post => (
                        <Post post={post} key={post.id} />
                    ))}
        </div>
    )
}

export default Posts