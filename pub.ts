// JavaScript SDK
import PocketBase from "pocketbase";

const pb = new PocketBase("http://localhost:8090");

const [name] = Deno.args;

// create a new 'example' collection record
const newRecord = await pb.collection("movies").create({
    name,
});

console.log("newRecord", newRecord);
