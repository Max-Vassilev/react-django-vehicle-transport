import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/all-vehicle-requests/');
      const data = await response.json();
      setRequests(data);
    };

    fetchRequests();
  }, []);

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">All Vehicle Transport Requests</h2>
        <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
          {requests.map(request => (
            <div key={request.id} className="p-6 border rounded-lg shadow-md bg-gray-100">
              <p>Pickup: {request.pickup_city}, {request.pickup_country}</p>
              <p>Delivery: {request.delivery_city}, {request.delivery_country}</p>
              <p>Small Cars: {request.small_car_count}</p>
              <p>Big Cars: {request.big_car_count}</p>
              <p>SUVs: {request.suv_count}</p>
              <p>Buses: {request.bus_count}</p>
              <p>Total Cost: ${request.final_sum}</p>
              <p>Status: {request.status}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyRequests;
