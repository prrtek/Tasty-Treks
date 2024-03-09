import "dotenv/config";
import express from "express";
import cors from "cors";
import connection from "./db/db.js";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connection();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
