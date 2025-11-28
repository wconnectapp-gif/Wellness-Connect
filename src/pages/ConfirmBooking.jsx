// import { useContext } from "react";
// import { BookingContext } from "../components/context/BookingContext";
// import Navbar from "../components/sharedComponents/Navbar";
// import ProgressBar from "../components/booking/ProgressBar";
// import { useNavigate } from "react-router-dom";

// const ConfirmBooking = () => {
//   const { bookingData, setBookingData } = useContext(BookingContext);
//   const navigate = useNavigate();

//   const handleConfirm = () => {
//     navigate("/success");
//   };

//   return (
//     <div className="min-h-screen bg-background-light">
//       {/* <Navbar step="Step 3/3" /> */}
//       <main className="flex flex-col gap-8 py-10">
//         <ProgressBar label="Confirm Your Booking" percent={100} />

//         <div className="px-10">
//           <h1 className="text-4xl font-black mb-2">Confirm Your Booking ✅</h1>
//           <p className="text-[#4c9a66]">Please review the details before final submission.</p>
//         </div>

//         <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-2xl shadow space-y-5">
//           <div className="flex justify-between">
//             <p className="font-semibold">Selected Service:</p>
//             <p>{bookingData.service || "Not selected"}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="font-semibold">Name:</p>
//             <p>{bookingData.name}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="font-semibold">Email:</p>
//             <p>{bookingData.email}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="font-semibold">Phone:</p>
//             <p>{bookingData.phone}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="font-semibold">Date & Time:</p>
//             <p>{bookingData.dateTime}</p>
//           </div>
//           {bookingData.notes && (
//             <div className="flex justify-between">
//               <p className="font-semibold">Notes:</p>
//               <p>{bookingData.notes}</p>
//             </div>
//           )}

//           <div className="flex flex-col gap-2 mt-4">
//             <label className="font-semibold">Payment Method</label>
//             <select
//               name="paymentMethod"
//               value={bookingData.paymentMethod}
//               onChange={(e) =>
//                 setBookingData({ ...bookingData, paymentMethod: e.target.value })
//               }
//               className="border border-[#cfe7d7] rounded-lg px-4 py-2 focus:border-primary outline-none"
//             >
//               <option value="paystack">Paystack</option>
//               <option value="paypal">PayPal</option>
//               <option value="cash">Cash</option>
//             </select>
//           </div>

//           <div className="flex justify-between mt-8">
//             <button
//               onClick={() => navigate("/details")}
//               className="bg-[#cfe7d7] text-[#0d1b12] font-semibold px-8 py-2 rounded-lg hover:bg-[#b8d9c6]"
//             >
//               Back
//             </button>
//             <button
//               onClick={handleConfirm}
//               className="bg-primary text-[#0d1b12] font-bold px-8 py-2 rounded-lg hover:shadow-lg"
//             >
//               Confirm Booking
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ConfirmBooking;

import { useContext } from "react";
import { BookingContext } from "../components/context/BookingContext";
import ProgressBar from "../components/booking/ProgressBar";
import { PaystackButton } from "react-paystack";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const { bookingData, setBookingData } = useContext(BookingContext);
  const navigate = useNavigate();

  // Payment Keys
  const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const flutterwaveKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY;

  // Booking Details
  // const amount = 5000; // Flutterwave uses Naira directly
  const amount = bookingData.price;

  const email = bookingData.email || "guest@wellnessconnect.com";
  const name = bookingData.name || "Guest";
  const phone = bookingData.phone || "";

  // Paystack Configuration
  const paystackProps = {
    email,
    amount: amount * 100, // Paystack accepts kobo
    metadata: {
      name,
      phone,
      service: bookingData.service,
      dateTime: bookingData.dateTime,
    },
    publicKey: paystackKey,
    text: "Pay with Paystack",
    onSuccess: () => {
      // alert("Payment Successful!");
      navigate("/success");
    },
    // onClose: () => alert("Payment window closed."),
  };

  // Flutterwave Configuration
  const flutterConfig = {
    public_key: flutterwaveKey,
    tx_ref: Date.now(),
    amount,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email,
      phonenumber: phone,
      name,
    },
    customizations: {
      title: "Wellness Connect Booking",
      description: "Payment for your wellness service",
      logo: "/logo.png", // optional
    },
  };

  const fwConfig = {
    ...flutterConfig,
    text: "Pay with Flutterwave",
    callback: (response) => {
      console.log(response);
      if (response.status === "successful") {
        // alert("Payment Successful!");
        closePaymentModal();
        navigate("/success");
      }
    },
    // onClose: () => alert("Payment closed."),
  };

  return (
    <div className="min-h-screen bg-background-light max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <main className="flex flex-col gap-8 py-10">
        <ProgressBar label="Confirm Your Booking" percent={100} />

        <div className="px-10">
          <h1 className="text-4xl font-black mb-2">Confirm Your Booking ✅</h1>
          <p className="text-[#4c9a66]">
            Please review the details before final submission.
          </p>
        </div>

        <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-2xl shadow space-y-5">
          <div className="flex justify-between">
            <p className="font-semibold">Selected Service:</p>
            <p>{bookingData.service || "Not selected"}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Name:</p>
            <p>{name}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Email:</p>
            <p>{email}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Phone:</p>
            <p>{phone}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Date & Time:</p>
            <p>{bookingData.dateTime}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Package:</p>
            <p>{bookingData.package}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Price:</p>
            <p>₦{bookingData.price.toLocaleString()}</p>
          </div>

          {bookingData.notes && (
            <div className="flex justify-between">
              <p className="font-semibold">Notes:</p>
              <p>{bookingData.notes}</p>
            </div>
          )}

          {/* 🔘 Payment Method Selector */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Choose Payment Method:</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paystack"
                  checked={bookingData.paymentMethod === "paystack"}
                  onChange={() =>
                    setBookingData((prev) => ({
                      ...prev,
                      paymentMethod: "paystack",
                    }))
                  }
                />
                Paystack
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="flutterwave"
                  checked={bookingData.paymentMethod === "flutterwave"}
                  onChange={() =>
                    setBookingData((prev) => ({
                      ...prev,
                      paymentMethod: "flutterwave",
                    }))
                  }
                />
                Flutterwave
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => navigate("/details")}
              className="bg-[#cfe7d7] text-[#0d1b12] font-semibold px-8 py-2 rounded-lg hover:bg-[#b8d9c6] w-full sm:w-auto"
            >
              Back
            </button>

            {bookingData.paymentMethod === "paystack" ? (
              <PaystackButton
                {...paystackProps}
                className="bg-primary text-[#0d1b12] font-bold px-8 py-2 rounded-lg hover:shadow-lg w-full sm:w-auto"
              />
            ) : bookingData.paymentMethod === "flutterwave" ? (
              <FlutterWaveButton
                {...fwConfig}
                className="bg-[#ffb703] text-[#0d1b12] font-bold px-8 py-2 rounded-lg hover:shadow-lg w-full sm:w-auto"
              />
            ) : (
              <button
                onClick={() => alert("Please select a payment method")}
                className="bg-primary text-[#0d1b12] font-bold px-8 py-2 rounded-lg hover:shadow-lg w-full sm:w-auto"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConfirmBooking;
