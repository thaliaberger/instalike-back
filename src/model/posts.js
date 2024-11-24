import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conection = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = conection.db("instalike");
    const collection = db.collection("posts");
    return collection.find().toArray();
};

export async function createNewPost(post) {
    const db = conection.db("instalike");
    const collection = db.collection("posts");
    return collection.insertOne(post);
};

export async function update(id, updatedData) {
    const objectId = ObjectId.createFromHexString(id);
    const db = conection.db("instalike");
    const collection = db.collection("posts");
    return collection.updateOne({ _id: new ObjectId(objectId) }, { $set: updatedData });
};