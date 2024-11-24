import express from "express";
import multer from "multer";
import { createPost, listPosts, updatePost, uploadImage } from "../controller/posts.js";
import cors from "cors";

const corsOptions =  {
    origin: "http://locahost:8000",
    optionsSuccessStatus: 200
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/posts", listPosts);
    app.post("/posts", createPost);
    app.post("/upload", upload.single("image"), uploadImage);
    app.put("/update/:id", updatePost);
};

export default routes;
