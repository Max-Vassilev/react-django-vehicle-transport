import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchRequests = async () => {
    const token = localStorage.getItem("access");

    try {
      const response = await fetch(`https://vehicles-backend.azurewebsites.net/api/vehicle-requests/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRequests(data.length ? data.reverse() : []); // Reverse the array to show the newest first
      } else {
        setMessage("Failed to load requests.");
      }
    } catch (error) {
      setMessage("Error fetching requests.");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const getStatusStyle = (isApproved) => {
    return isApproved
      ? "bg-green-700 text-white px-4 py-1 rounded font-semibold"
      : "bg-yellow-700 text-white px-4 py-1 rounded font-semibold";
  };

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-6">
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">
          My Vehicle Transport Requests
        </h1>
        {message && (
          <div className="bg-red-500 text-white p-4 rounded square-border mb-6 text-center font-semibold">
            {message}
          </div>
        )}
        {requests.length === 0 ? (
          <div className="text-gray-400 text-center text-lg">No requests found.</div>
        ) : (
          <div className="overflow-x-auto bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
            <table className="min-w-full table-auto border-separate border border-black">
              <thead className="text-white bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border hidden sm:table-cell">Created At</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border">Pickup</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border">Destination</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border hidden sm:table-cell">Small Cars</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border hidden sm:table-cell">Big Cars</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border hidden sm:table-cell">SUVs</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-black square-border">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 border-b border-black square-border hidden sm:table-cell">{new Date(request.created_at).toLocaleString()}</td>
                    <td className="px-6 py-4 border-b border-black square-border">{`${request.pickup_city}, ${request.pickup_country}`}</td>
                    <td className="px-6 py-4 border-b border-black square-border">{`${request.delivery_city}, ${request.delivery_country}`}</td>
                    <td className="px-6 py-4 border-b border-black square-border hidden sm:table-cell">{request.small_car_count}</td>
                    <td className="px-6 py-4 border-b border-black square-border hidden sm:table-cell">{request.big_car_count}</td>
                    <td className="px-6 py-4 border-b border-black square-border hidden sm:table-cell">{request.suv_count}</td>
                    <td className="px-6 py-4 border-b border-black square-border">
                      <span className={getStatusStyle(request.is_approved)}>
                        {request.is_approved ? "APPROVED" : "PENDING"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyRequests;
