import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // const [bookingData, setBookingData] = useState({
  //   service: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  //   dateTime: "",
  //   notes: "",
  //   paymentMethod: "paystack",
  // });

  const [bookingData, setBookingData] = useState({
  service: "",
  package: "",
  price: 0,
  name: "",
  email: "",
  phone: "",
  dateTime: "",
  notes: "",
  paymentMethod: "paystack",
});


  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
