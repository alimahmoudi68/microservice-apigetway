import axios from "axios";
import { Request, Response } from "express";
import { services } from "../config/services";

export async function forwardRequest(
  serviceName: keyof typeof services,
  req: Request,
  res: Response
) {
  try {
    const url = services[serviceName] + req.originalUrl;

    const response = await axios({
      method: req.method,
      url,
      headers: req.headers,
      data: req.body,
    });

    return res.status(response.status).json(response.data);

  } catch (error: any) {
    if (error.response) {
      return res
        .status(error.response.status)
        .json(error.response.data);
    }

    return res.status(500).json({ message: "Service unavailable" });
  }
}
