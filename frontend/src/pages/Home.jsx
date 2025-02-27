import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import useIsLoggedIn from "../isLoggedIn";

function Home() {
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message);
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useIsLoggedIn();

  const handleClose = () => {
    setVisible(false);
    localStorage.removeItem("requestMade");
  };

  useEffect(() => {
    const requestMade = localStorage.getItem("requestMade");
    if (requestMade) {
      setMessage("Your request was successfully sent. Expect to be contacted soon.");
      setVisible(true);
    }
  }, []);

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      {visible && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 relative shadow-md rounded mx-4 mt-4 flex items-center justify-between">
          <div className="flex-1 text-center">
            <span className="text-lg">{message}</span>
          </div>
          <button 
            onClick={handleClose} 
            className="text-white text-2xl font-bold p-1 rounded focus:outline-none transition-transform duration-200 hover:scale-110 hover:bg-blue-500"
          >
            X
          </button>
        </div>
      )}
      <main className="flex-grow py-12">
        <Hero />
        <Gallery />
        <CTA />
        {!isLoggedIn && (
          <div className="text-gray-400 text-center mt-4">
            Please log in to make a request for vehicle transportation.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
