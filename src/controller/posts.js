import { getAllPosts, createNewPost } from "../model/posts.js"

export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).send(posts);
};

export async function createPost(req, res) {
    const content = req.body;

    try {
        const newPost = await createNewPost(content);
        res.status(200).send(newPost);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error": "Bad request"});
    }
};