import { useContext } from "react";
import { BookingContext } from "../components/context/BookingContext";
import ProgressBar from "../components/booking/ProgressBar";
import { useNavigate } from "react-router-dom";

const YourDetails = () => {
  const { bookingData, setBookingData } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm");
  };

  return (
    <div className="min-h-screen bg-background-light max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <main className="flex flex-col gap-8 py-10">
        <ProgressBar label="Enter Your Details" percent={66} />

        <div className="px-10">
          <h1 className="text-4xl font-black mb-2">Let’s know you better 🌿</h1>
          <p className="text-[#4c9a66]">Fill in your details to confirm your wellness appointment.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-2xl w-full mx-auto bg-white p-8 rounded-2xl shadow"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={bookingData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#cfe7d7] rounded-lg px-4 py-2 focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#cfe7d7] rounded-lg px-4 py-2 focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={bookingData.phone}
              onChange={handleChange}
              required
              className="w-full border border-[#cfe7d7] rounded-lg px-4 py-2 focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={bookingData.dateTime}
              onChange={handleChange}
              required
              className="w-full border border-[#cfe7d7] rounded-lg px-4 py-2 focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={bookingData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Optional message..."
              className="w-full border border-[#cfe7d7] rounded-lg px-4 py-2 focus:border-primary outline-none"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-[#cfe7d7] text-[#0d1b12] font-semibold px-8 py-2 rounded-lg hover:bg-[#b8d9c6]"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-primary text-[#0d1b12] font-bold px-8 py-2 rounded-lg hover:shadow-lg"
            >
              Continue
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default YourDetails;
