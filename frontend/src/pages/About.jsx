import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <h1 className="text-white text-3xl text-center">About Us</h1>
        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          We are a trusted vehicle transport company dedicated to providing safe and reliable transport services. 
          Whether you need to move a small car, SUV, or a large bus, we ensure a smooth and secure delivery.
        </p>
        <div className="mt-8 text-white flex flex-col items-center">
          <div className="mb-4 max-w-2xl text-center">
            <span className="font-bold">Our Mission:</span> To deliver top-quality transport services while ensuring customer satisfaction and safety.
          </div>
          <div className="mb-4 max-w-2xl text-center">
            <span className="font-bold">Why Choose Us?</span> We offer competitive pricing, timely delivery, and a professional team you can rely on.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
