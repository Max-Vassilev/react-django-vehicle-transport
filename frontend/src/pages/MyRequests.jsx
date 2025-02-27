import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/vehicle-requests/");

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setRequests(data.length ? data : []);
        } else {
          setMessage("Failed to load requests.");
        }
      } catch (error) {
        setMessage("Error fetching requests.");
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <h1 className="text-2xl font-semibold text-white mb-6">My Vehicle Transport Requests</h1>
        {message && <div className="bg-blue-500 text-white p-4 rounded shadow-md mb-6">{message}</div>}
        {requests.length === 0 ? (
          <div className="text-gray-400 text-center">No requests found.</div>
        ) : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li key={request.id} className="p-4 border rounded-lg shadow bg-white">
                <p className="font-medium text-lg">Pickup: {request.pickup_location}</p>
                <p className="text-gray-700">Destination: {request.destination}</p>
                <p className="text-sm text-gray-500">Status: {request.status}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyRequests;
