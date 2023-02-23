import express from "express";
import cors from "cors"
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 8081;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.listen(PORT, ()=>{
    console.log("Está rodando!")
});