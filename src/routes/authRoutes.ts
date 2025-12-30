import { Router } from "express";
import { forwardRequest } from "../services/serviceProxy";

const router = Router();

router.post("/auth/register", (req, res) =>
  forwardRequest("auth", req, res)
);

router.post("/auth/login", (req, res) =>
  forwardRequest("auth", req, res)
);

export default router;
