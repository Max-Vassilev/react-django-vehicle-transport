import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <h1 className="text-white text-3xl text-center">Pricing Plans</h1>
        <p className="text-gray-400 text-center mt-4">
          Choose the transport plan that works best for your needs. We offer a range of pricing options based on the vehicle type and distance.
        </p>
        <div className="mt-8 text-white flex flex-col items-center">
          <ul className="list-disc list-inside text-left">
            <li className="mb-2">
              <span className="font-bold">Small Car Transport:</span> $500 - $800
            </li>
            <li className="mb-2">
              <span className="font-bold">Big Car & SUV Transport:</span> $900 - $1,500
            </li>
            <li className="mb-2">
              <span className="font-bold">Bus & Large Vehicle Transport:</span> $1,800 - $3,000
            </li>
            <li>
              <span className="font-bold">International Shipping:</span> Custom Pricing
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing;
