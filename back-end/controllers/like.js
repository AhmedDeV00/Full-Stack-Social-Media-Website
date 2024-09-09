import { db } from "../connects.js"
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
    const postId = req.query.postId;
    if (!postId) {
        return res.status(400).json({ error: "postId is required" });
    }
    const q = "SELECT userId FROM likes WHERE postId = ?";

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(data.map(like => like.userId))
    })


}
export const addLikes = (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Token not found!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("token is not valid!");

        const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?)";
        const values = [
            userInfo.id,
            req.body.postId
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been Liked!")
        })

    })


}

export const deleteLikes = (req, res) => {
    // to check of postId console.log(req.query.postId);

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Token not found!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("token is not valid!");

        const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";


        db.query(q, [userInfo.id, req.query.postId], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been disliked!")
        })

    })


}