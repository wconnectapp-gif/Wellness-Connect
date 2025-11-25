// import Navbar from "../components/Navbar";
import ProgressBar from "../components/booking/ProgressBar";
import ServiceCard from "../components/booking/ServiceCard";
import { useNavigate } from "react-router-dom";
import { wellnessPackages } from "../data/packages";
import { useContext } from "react";
import { BookingContext } from "../components/context/BookingContext";

const SelectService = () => {
  const navigate = useNavigate();
  const services = [
    { icon: "self_improvement", title: "Lifestyle", desc: "Relaxing massages and rejuvenating treatments." },
    { icon: "spa and yoga party", title: "party", desc: "Mindful classes and private yoga sessions." },
    { icon: "yoga packages", title: "yoga", desc: "Mindful classes and private yoga sessions." },
    { icon: "Therapeutic Massages", title: "therapeutic", desc: "for arthritis, diabetes, back pain, recovery" },
    { icon: "corporate_fare", title: "Corporate", desc: "Wellness programs for your entire workplace." },
    { icon: "child_care", title: "Kids", desc: "Fun and engaging wellness for children." },
  ];

  const { bookingData, setBookingData } = useContext(BookingContext);

  const selectedServiceKey = bookingData.service?.toLowerCase();
  const showPackages = wellnessPackages[selectedServiceKey];

  return (
    <div className="min-h-screen bg-background-light">
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
            <label className="font-semibold text-sm sm:text-base">Select Package:</label>
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
            onClick={() => navigate("/details")}
            className="bg-primary text-[#0d1b12] font-bold px-6 sm:px-10 py-3 rounded-xl hover:shadow-lg text-sm sm:text-base"
          >
            Continue
          </button>
        </footer>
      </main>
    </div>
  );
};

export default SelectService;
