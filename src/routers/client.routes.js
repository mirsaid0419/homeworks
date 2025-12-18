import { Router } from "express";
import client from "../controllers/Client.controller.js";
const router = Router();
router
  .get("/clients", client.getAllClients)
  .get("/clients/:id", client.getClientById)
  .post("/clients", client.addClient);
export default router;
