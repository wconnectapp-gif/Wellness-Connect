import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { FaRegCheckCircle } from "react-icons/fa";

const ServiceCard = ({ icon, title, desc }) => {
  const { bookingData, setBookingData } = useContext(BookingContext);
  const selected = bookingData.service === title;

  return (
    <div
      onClick={() => setBookingData({ ...bookingData, service: title })}
      className={`flex flex-col gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
        selected
          ? "border-primary bg-[#e7f3eb] shadow-md -translate-y-0.5"
          : "border-[#cfe7d7] bg-[#f8fcf9] hover:shadow-md"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-green-400 hover:-rotate-180 transition-all duration-300 ease-in">{icon}</span>
        {/* <span className="material-symbols-outlined text-3xl">{icon}</span> */}

        {selected && <span className="material-symbols-outlined text-2xl text-primary"><FaRegCheckCircle /></span>}
      </div>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-[#4c9a66]">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
