import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Request = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    pickup_country: "",
    pickup_city: "",
    delivery_country: "",
    delivery_city: "",
    small_car_count: 0,
    big_car_count: 0,
    suv_count: 0,
    bus_count: 0
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    const token = localStorage.getItem("jwt_token");

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/create-vehicle-request/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      localStorage.setItem("requestMade", "true");
      navigate('/', { state: { message: "Your request was successfully sent. Expect to be contacted soon." } });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 flex flex-col items-center">
        <h1 className="text-white text-3xl">Request Transport</h1>
        <form onSubmit={handleSubmit} className="mt-8 bg-gray-900 p-6 rounded-lg w-full max-w-lg">
          {[
            { label: "Phone", name: "phone" },
            { label: "Pickup Country", name: "pickup_country" },
            { label: "Pickup City", name: "pickup_city" },
            { label: "Delivery Country", name: "delivery_country" },
            { label: "Delivery City", name: "delivery_city" }
          ].map(({ label, name }) => (
            <div key={name} className="mb-4">
              <label className="block text-white">{label}:</label>
              <input name={name} placeholder={label} value={formData[name]} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white" required />
            </div>
          ))}
          {[
            { label: "Small Car Count", name: "small_car_count" },
            { label: "Big Car Count", name: "big_car_count" },
            { label: "SUV Count", name: "suv_count" },
            { label: "Bus Count", name: "bus_count" }
          ].map(({ label, name }) => (
            <div key={name} className="mb-4">
              <label className="block text-white">{label}:</label>
              <input type="number" name={name} value={formData[name]} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white" min="0" />
            </div>
          ))}
          <button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl transform hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Request;
