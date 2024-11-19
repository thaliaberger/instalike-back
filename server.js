import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Teste 1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Teste 2",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Teste 3",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Teste 4",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Teste 5",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

function getPostIndex(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/post/:id", (req, res) => {
    const index = getPostIndex(req.params.id) 
    res.status(200).send(posts[index]);
});