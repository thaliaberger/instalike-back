import { getAllPosts, createNewPost, update } from "../model/posts.js"
import fs from "fs";
import gerarDescricaoComGemini from "../services/gemini.js";

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

export async function uploadImage(req, res) {
    const post = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const newPost = await createNewPost(post);
        const image = `uploads/${newPost.insertedId}.png`;
        fs.renameSync(req.file.path, image);
        res.status(200).send(newPost);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error": "Bad request"});
    }
};

export async function updatePost(req, res) {
    const id = req.params.id;
    const imgUrl = `http://localhost:3000/${id}.png`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const description = await gerarDescricaoComGemini(imgBuffer);

        const data = {
            description: description,
            imgUrl: imgUrl,
            alt: req.body.alt
        };

        const updatedPost = await update(id, data);
        res.status(200).send(updatedPost);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error": "Bad request"});
    }
};
