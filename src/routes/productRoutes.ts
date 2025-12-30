import { Router } from "express";
import { forwardRequest } from "../services/serviceProxy";

const router = Router();

router.get("/products", (req, res) =>
  forwardRequest("product", req, res)
);

export default router;
