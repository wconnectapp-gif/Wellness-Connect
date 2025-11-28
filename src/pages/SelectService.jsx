// import Navbar from "../components/Navbar";
import ProgressBar from "../components/booking/ProgressBar";
import ServiceCard from "../components/booking/ServiceCard";
import { useNavigate } from "react-router-dom";
import { wellnessPackages } from "../data/packages";
import { useContext } from "react";
import { BookingContext } from "../components/context/BookingContext";
import {
  MdSelfImprovement,
  MdHealthAndSafety,
  MdCorporateFare,
} from "react-icons/md";
import { GiPartyPopper, GiMeditation } from "react-icons/gi";
import { FaChild } from "react-icons/fa6";

const SelectService = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <MdSelfImprovement className="text-3xl text-primary" />,
      title: "Lifestyle Wellness",
      desc: "Relaxing massages and rejuvenating treatments.",
    },
    {
      icon: <GiPartyPopper className="text-3xl text-primary" />,
      title: "Spa & Yoga Party Packages",
      desc: "Mindful classes and private yoga sessions.",
    },
    {
      icon: <GiMeditation className="text-3xl text-primary" />,
      title: "Yoga Packages",
      desc: "Mindful classes and private yoga sessions.",
    },
    {
      icon: <MdHealthAndSafety className="text-3xl text-primary" />,
      title: "Therapeutic Wellness",
      desc: "for arthritis, diabetes, back pain, recovery",
    },
    {
      icon: <MdCorporateFare className="text-3xl text-primary" />,
      title: "Corporate Wellness",
      desc: "Wellness programs for your entire workplace.",
    },
    {
      icon: <FaChild className="text-3xl text-primary" />,
      title: "Kids Yoga",
      desc: "Fun and engaging wellness for children.",
    },
  ];

  const { bookingData, setBookingData } = useContext(BookingContext);

  const selectedServiceKey = bookingData.service;
  const showPackages = wellnessPackages[selectedServiceKey];

  const canContinue =
    Boolean(bookingData.service) && Boolean(bookingData.package);

  return (
    // <div className="min-h-screen bg-background-light">
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12 bg-background-light">
      <main className="flex flex-col gap-8 py-8 sm:py-10">
        <ProgressBar label="Select a Service" percent={33} />

        {/* HEADER TEXT */}
        <div className="px-4 sm:px-10 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-2">
            How can we help you relax today?
          </h1>
          <p className="text-[#4c9a66] text-sm sm:text-base">
            Select a service category to begin your wellness journey.
          </p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid px-4 sm:px-10 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* PACKAGE DROPDOWN */}
        {showPackages && (
          <div className="px-4 sm:px-10 mt-5">
            <label className="font-semibold text-sm sm:text-base">
              Select Package:
            </label>
            <select
              value={bookingData.package}
              onChange={(e) => {
                const pkg = showPackages.find((p) => p.name === e.target.value);
                setBookingData({
                  ...bookingData,
                  package: pkg.name,
                  price: pkg.price,
                });
              }}
              className="w-full border px-3 py-2 sm:px-4 sm:py-3 rounded-lg mt-2 text-sm sm:text-base"
            >
              <option>Select a package</option>
              {showPackages.map((pkg) => (
                <option key={pkg.name} value={pkg.name}>
                  {pkg.name} — ₦{pkg.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* FOOTER BUTTON */}
        <footer className="flex justify-center mt-8 sm:mt-10">
          <button
            disabled={!canContinue}
            onClick={() => {
              navigate("/details");
            }}
            className={`font-bold px-6 sm:px-10 py-3 rounded-xl text-sm sm:text-base transition-all ${
              canContinue
                ? "bg-primary text-[#0d1b12] hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </footer>
      </main>
    </div>
  );
};

export default SelectService;
