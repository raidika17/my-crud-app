import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/routes";
const app = express();
const port = process.env.MYSQL_PORT; // Port untuk backend

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log("Server is running....");
});
