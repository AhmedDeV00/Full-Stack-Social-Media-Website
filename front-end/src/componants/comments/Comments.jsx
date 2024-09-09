import { useContext, useState } from "react";
import "./comments.css"
import { AuthContext } from '../auth/AuthContext';
import { makeRequest } from "../../axios";
import moment from "moment";
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';


function Comments({ postId }) {

    const [desc, setDesc] = useState("")
    const { currentUser } = useContext(AuthContext)


    const { isLoading, error, data = [] } = useQuery({
        queryKey: ["comments", postId],
        queryFn: () =>
            makeRequest.get(`/comments?postId=${postId}`).then((res) => {
                return res.data;
                // console.log(data);
            }),
    });

    const queryClient = useQueryClient();

    // Mutations
    const mutation = useMutation({
        mutationFn: (newComment) => makeRequest.post("/comments", newComment),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["comments"] })
        },
    });




    const handleClick = async (e) => {
        e.preventDefault();
        mutation.mutate({ desc, postId })
        setDesc("");
    };

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment" onChange={(e) => setDesc(e.target.value)} value={desc} />
                <button onClick={handleClick}>Send</button>
            </div>
            {error
                ? "Something went wrong"
                : isLoading
                    ? "loading"
                    : data.map((comment) => (
                        <div className="comment" key={comment.id}>
                            <img src={comment.profilePic} alt="" />
                            <div className="info">
                                <span>{comment.name}</span>
                                <p>{comment.desc}</p>
                            </div>
                            <span className="date">
                                {moment(comment.createdAt).fromNow()}
                            </span>
                        </div>
                    ))}
        </div>
    )
}

export default Comments