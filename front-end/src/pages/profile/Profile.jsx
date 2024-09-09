import "./profile.css"

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../componants/posts/Post";
import { useTheme } from "../../componants/theme/ThemeContext";
import { makeRequest } from "../../axios";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../componants/auth/AuthContext";
import Update from "../../componants/update/Update";

//import Language from "@mui/icons-material/Language";

function Profile() {

    const [openUpdate, setOpenUpdate] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const userId = parseInt(useLocation().pathname.split("/")[2])

    const { data = [] } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            makeRequest.get("/users/find/" + userId).then((res) => {
                return res.data;
            }),

    });
    const { isLoading: rIsloading, data: relationshipData = [] } = useQuery({
        queryKey: ["relationship", userId],
        queryFn: () =>
            makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
                return res.data;
            }),

    });

    const queryClient = useQueryClient();

    // Mutations
    const mutation = useMutation({
        mutationFn: (following) => {
            // Conditional logic based on 'liked' status
            if (following) {
                return makeRequest.delete("/relationships?userId=" + userId);
            } else {
                return makeRequest.post("/relationships", { userId });
            }
        },
        onSuccess: () => {
            // Invalidate and refetch the likes or posts query after mutation
            queryClient.invalidateQueries({ queryKey: ['relationship', userId] });
        },
    });


    const handleFollow = () => {
        mutation.mutate(relationshipData.includes(currentUser.id))
    }


    const { theme } = useTheme();
    return (
        <div className={`profile ${theme}`}>
            <div className="images">
                <img src={"/upload/" + data.coverpic} alt="" className="cover" />
                <img
                    src={"/upload/" + data.profilePic}
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>{data.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>{data.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>{data.website}</span>
                            </div>
                        </div>
                        {rIsloading ? "Loading" : userId === currentUser.id ? (<button onClick={() => setOpenUpdate(true)}>Update</button>) : <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>}
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts userId={userId} />
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </div>
    )
}

export default Profile