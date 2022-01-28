import Express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/router";

const app = Express();
const port = process.env.PORT || 5000;
const uri = "mongodb://localhost/shortly";

app.use(cors());
app.use(Express.json());

app.use("/", router);

mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log("Connected Successfull!");
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
