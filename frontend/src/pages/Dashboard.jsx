import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [message, setMessage] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:3000/room");
        setRooms(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const newID = localStorage.getItem("userID");
    if (newID) {
      setUserID(newID);
    }
  }, []);

  const handleBooking = async (roomId, date) => {
    try {
      const res = await axios.post("http://localhost:3000/room/book", {
        roomId,
        date,
      });
      setMessage(res.data.message);
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage("Server error. Please try again later.");
        setTimeout(() => setMessage(""), 5000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold bg-gray-500 text-white py-2 px-4 rounded-full mb-6">
        User: {userID}
      </h1>
      <h1 className="text-black font-extrabold m-2 text-4xl mb-8">
        Book a Room
      </h1>
      <div className="flex flex-wrap justify-center">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} handleBooking={handleBooking} />
        ))}
      </div>
      {message && (
        <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg ${
            message.includes("successfully") ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <p className="text-white">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
