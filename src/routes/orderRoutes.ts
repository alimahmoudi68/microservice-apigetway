import { Router } from "express";
import auth from "../middleware/auth";
import { forwardRequest } from "../services/serviceProxy";

const router = Router();

router.post("/orders", auth, (req, res) =>
  forwardRequest("order", req, res)
);

router.get("/orders", auth, (req, res) =>
  forwardRequest("order", req, res)
);

export default router;
