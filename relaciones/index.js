import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDb } from "./src/database.js";

// importar rutas
import mongoRoutes from "./src/routes/mongoRoutes.js"
import schoolRoutes from "./src/routes/schoolRoutes.js"
import studentRoutes from "./src/routes/studentRoutes.js"


connectDb()
const app = express();

app.set("Port", 4000);
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extened: true }));
app.use(express.json());

app.use("/mongo", mongoRoutes)
app.use("/school", schoolRoutes)
app.use("/student", studentRoutes)

app.listen(app.get("Port"), () => {
  console.log("sevidor escuando por el puerto", app.get("Port"));
});
