import express from "express"
const router = express.Router();
import Room from "../models/room.model.js";

router.get("/room" , async (req,res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    re.status(500).send("internal server error")
  }
})
router.get("/room/:id" , async (req,res) => {
  const {id} = req.params;
  try {
    const room = await Room.findById(id);
    if(!room){
      return res.status(404).send("room not found")
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).send("internal server error")
  }
})

router.post('/room/book', async (req, res) => {
  const { roomId, date } = req.body;
  const bookingDate = new Date(date);
  
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).send('Room not found');
    }

    const isBooked = room.reservations.some(reservedDate => reservedDate.toDateString() === bookingDate.toDateString());
    if (isBooked) {
      return res.status(400).send('Room already booked for the selected date');
    }

    room.reservations.push(bookingDate);
    await room.save();

    return res.status(200).json({ message: 'Room booked successfully' });
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});


export default router;