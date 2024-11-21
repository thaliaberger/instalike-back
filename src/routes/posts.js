import express from "express";
import { listPosts } from "../controller/posts.js"

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listPosts);
};

export default routes;
