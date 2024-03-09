import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
