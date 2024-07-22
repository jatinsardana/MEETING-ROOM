import React, { useState } from 'react';

const RoomCard = ({ room, handleBooking }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    handleBooking(room._id, selectedDate);
    setShowForm(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 m-4 w-64">
      <h2 className="text-xl font-bold mb-2">{room.roomName}</h2>
      <p className="text-gray-700">Capacity: {room.capacity}</p>
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setShowForm(true)}
      >
        Book Now
      </button>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Book Room: {room.roomName}</h3>
            <label className="block mb-2">Select Date:</label>
            <input 
              type="date" 
              value={selectedDate} 
              onChange={handleDateChange} 
              className="block mb-4 p-2 border rounded w-full"
            />
            <button 
              className="bg-green-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Confirm Booking
            </button>
            <button 
              className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomCard;
