import {getAllPosts} from "../model/posts.js"

export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).send(posts);
}