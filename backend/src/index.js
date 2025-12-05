import dotenv from "dotenv";
dotenv.config();   // ✅ Load env FIRST

import connectDB from "./db/index.js";  // Now db can read correct env
import app from "./app.js";

console.log("Index.js loaded");
console.log("MONGODB_URI =>", process.env.MONGODB_URI);
console.log("Calling connectDB()...");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runnig at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED", err);
  });
