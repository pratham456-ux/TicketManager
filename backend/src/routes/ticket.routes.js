import {Router} from "express";
import { listTickets, createTicket, getTicketById, updateTicketById, deleteTicketById } from "../controllers/ticket.controller.js";
const router = Router();

//CRUD operations for tickets will be defined here

router.get("/tickets",listTickets);
router.post("/tickets",createTicket);
router.get("/tickets/:id",getTicketById);
router.put("/tickets/:id",updateTicketById);
router.delete("/tickets/:id",deleteTicketById);

export default router;
