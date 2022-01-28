import { Router } from "express";
import { UrlModel } from "./models/Url.model";

const router = Router();

router.post("/new", async (req, res) => {
  const newUrl = { fullPath: req.body.url };
  const newModel = new UrlModel(newUrl);
  const result = await newModel.save();
  res.json(result).end();
});

router.get("/:id", async (req, res) => {
  const shortUrl = req.params.id;
  const result = await UrlModel.findOne({ shortUrl });
  if (result) {
    res.redirect(`${result.fullPath}`)
  } else {
    res.json({ "Error": "404 Error"}).end();
  }
});

export default router;
