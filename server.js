import express from "express";
import routes from "./src/routes/posts.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("servidor escutando...");
});