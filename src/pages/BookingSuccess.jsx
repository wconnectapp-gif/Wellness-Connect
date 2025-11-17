// import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center">
      {/* <Navbar step="Success" /> */}
      <div className="max-w-lg bg-white rounded-2xl shadow p-10 text-center mt-10">
        {/* <div className="flex justify-center mb-6">
          <span className="material-symbols-outlined text-green-500 text-6xl">
            check_circle
          </span>
        </div> */}
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-[#4c9a66] mb-6">
          Thank you for choosing <b>Wellness Connect</b>. You’ll receive a confirmation email shortly.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-[#0d1b12] font-bold px-8 py-3 rounded-lg hover:shadow-lg"
        >
          Book Another
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
