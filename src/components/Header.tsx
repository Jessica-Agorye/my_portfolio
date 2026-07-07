import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Nav";
import Button from "./atoms/Button";

const Header = () => {
  type Coords = { latitude: number | null; longitude: number | null };

  const [coords, setCoords] = useState<Coords>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude });
          setError(null);
          setShowModal(true);
        },
        (err) => {
          setError(err.message);
          setShowModal(true);
        }
      );
    } else {
      setError("Geolocation not supported by your browser");
      setShowModal(true);
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-[20] border-b p-4 md:p-8 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Navbar */}
      <div className="flex-1 md:flex md:justify-center">
        <Navbar />
      </div>

      {/* Buttons */}
      <div className="flex-shrink-0 hidden md:block space-x-3 relative">
        <Button
          className="
            text-xs font-bold py-2 px-3 bg-blue-600 text-white rounded-md cursor-pointer
            transition-colors duration-300 ease-in-out
            hover:text-teal-400 hover:bg-blue-700
            hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50
          "
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Call
          </a>
        </Button>
        <Button
          onClick={getLocation}
          className="
            text-xs font-bold py-2 px-3 bg-blue-600 text-white rounded-md cursor-pointer
            transition-colors duration-300 ease-in-out
            hover:text-teal-400 hover:bg-blue-700
            hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50
          "
        >
          Get my Location
        </Button>
        {showModal && (
          <div className="absolute top-full right-0 mt-2 w-64 p-2 bg-gray-800 text-white border rounded shadow-lg z-50">
            <div className="flex justify-end">
              <button
                className="text-xs text-gray-400 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                ✕{" "}
              </button>
            </div>
            {coords.latitude !== null && coords.longitude !== null ? (
              <>
                <p>
                  Latitude: {coords.latitude.toFixed(2)} <br />
                  Longitude: {coords.longitude.toFixed(2)}
                </p>
                <a
                  href={`https://www.google.com/maps?q=${coords.latitude.toFixed(
                    2
                  )},${coords.longitude.toFixed(2)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Open in Google Maps
                </a>
              </>
            ) : error ? (
              <p className="text-red-400">{error}</p>
            ) : (
              <p className="text-gray-400">Waiting for location...</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
