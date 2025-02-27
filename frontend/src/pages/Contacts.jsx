import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <h1 className="text-white text-3xl text-center">Contact Us</h1>
        <p className="text-gray-400 text-center mt-4">
          We’d love to hear from you! Please reach out using the information below.
        </p>
        <div className="mt-8 text-white flex flex-col items-center">
          <div className="mb-4">
            <span className="font-bold">Email:</span> support@example.com
          </div>
          <div className="mb-4">
            <span className="font-bold">Phone:</span> (123) 456-7890
          </div>
          <div>
            <span className="font-bold">Address:</span> 123 Transport St, City, Country
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contacts;
