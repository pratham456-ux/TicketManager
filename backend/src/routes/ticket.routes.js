import {Router} from "express";

const router = Router();

//CRUD operations for tickets will be defined here

router.get("/tickets",listTickets);
router.post("/tickets",createTicket);
router.get("/tickets/:id",getTicketById);
router.put("/tickets/:id",updateTicketById);
router.delete("/tickets/:id",deleteTicketById);