// JavaScript SDK
import PocketBase from "pocketbase";

console.log("Start");
const pb = new PocketBase("http://localhost:8090");

// subscribe to changes in any record from the 'example' collection
pb.collection("movies").subscribe("*", function (e) {
    console.log(`Record Added to collection ${e.record.collectionName}:`, e.record.name);
});

// stop listening for changes in the 'example' collection
// pb.collection('example').unsubscribe();
