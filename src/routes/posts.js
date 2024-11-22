import express from "express";
import { createPost, listPosts } from "../controller/posts.js"

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listPosts);

    app.post("/posts", createPost);
};

export default routes;
