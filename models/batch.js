import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  uniqueNumber: {
    type: Number,
    unique: true,
    required: true,
    min: 1
  },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL"],
    required: true,
  },
  color: {
    type: String,
    enum: ["red", "blue", "black", "green"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
});

export default mongoose.model("Batch", batchSchema);
