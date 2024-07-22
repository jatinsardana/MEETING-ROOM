import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomID: {
    type: String,
    required: true,
    unique: true,
  },
  roomName: {
    type: String,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  reservations: [Date],
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
