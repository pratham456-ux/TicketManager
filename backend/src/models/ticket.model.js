import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title:              { type: String, required: true },
    description:        { type: String, required: true },
    reported_by:        { type: String, required: true },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open"
    },

    priority_suggested: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true
    },

    priority_final: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: null
    },
    is_deleted:       { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
