import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import Ticket from "../models/ticket.model.js";

// CREATE TICKET
const createTicket = asyncHandler(async (req, res) => {
    const { title, description, priority_suggested } = req.body;

    if ([title, description, priority_suggested].some(field => !field || field.trim() === "")) {
        throw new apiError(400, "All fields are required");
    }

    const ticket = await Ticket.create({
        title,
        description,
        priority_suggested,
        reported_by: null // ❗ Will be replaced with req.user._id after auth
    });

    return res.status(201).json(
        new apiResponse(201, ticket, "Ticket created successfully")
    );
});

// GET ALL TICKETS
const listTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({ is_deleted: false })
    return res.status(200).json(
        new apiResponse(200, tickets, "Tickets fetched successfully")
    );
});

// GET SINGLE TICKET
const getTicketById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const ticket = await Ticket.findOne({ _id: id, is_deleted: false })
        
    if (!ticket) {
        throw new apiError(404, "Ticket not found");
    }

    return res.status(200).json(
        new apiResponse(200, ticket, "Ticket fetched successfully")
    );
});

// UPDATE TICKET
const updateTicketById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const ticket = await Ticket.findOneAndUpdate(
        { _id: id, is_deleted: false },
        updates,
        { new: true }
    )
    if (!ticket) {
        throw new apiError(404, "Ticket not found");
    }

    return res.status(200).json(
        new apiResponse(200, ticket, "Ticket updated successfully")
    );
});

// SOFT DELETE TICKET
const deleteTicketById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const ticket = await Ticket.findOneAndUpdate(
        { _id: id, is_deleted: false },
        { is_deleted: true },
        { new: true }
    );

    if (!ticket) {
        throw new apiError(404, "Ticket not found");
    }

    return res.status(200).json(
        new apiResponse(200, null, "Ticket deleted successfully")
    );
});

export {
    createTicket,
    listTickets,
    getTicketById,
    updateTicketById,
    deleteTicketById
};
