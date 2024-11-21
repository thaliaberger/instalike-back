import conectarAoBanco from "../config/dbconfig.js";

const conection = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = conection.db("instalike");
    const collection = db.collection("posts");
    return collection.find().toArray();
};