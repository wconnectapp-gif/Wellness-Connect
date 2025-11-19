import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f7f8f8]">
      <div className="w-full py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold items-center text-[#111827]">
            Get in Touch
          </h1>
          <p className="text-sm text-[#57616f] mt-1.5 p-4">
            We’re here to help you with bookings, reschedules, or any questions.
            Reach <br />
            out and let us know how we can assist you on your wellness journey
          </p>
        </div>
        {/* Contact Cards */}
        <div className="flex flex-col lg:flex-row gap-4 mt-20 justify-center w-full cursor-pointer">
          <div className="flex flex-col bg-white w-full text-base h-30 rounded-xl shadow-lg border border-gray-200 items-start p-3 leading-relaxed ">
            <MdOutlineEmail className="text-3xl text-[#1ae6c3]" />

            <h2 className="font-semibold text-grey-900 mt-4">Email Us</h2>
            <p className="text-sm text-[#57616f]">hello@wellnessconnect.com</p>
          </div>
          <div className="flex flex-col bg-white w-full text-base h-30 rounded-xl shadow-lg border border-gray-200 items-start p-3 leading-relaxed">
            <MdOutlineLocalPhone className="text-2xl text-[#1ae6c3]" />
            <h6 className="font-semibold text-grey-900 mt-4">
              Call or WhatsApp
            </h6>
            <p className="text-sm text-[#57616f] leading-normal">
              +233 55 123 4567
            </p>
          </div>
          <div className="flex flex-col bg-white w-full text-base h-30 rounded-xl shadow-lg border border-gray-200 items-start p-3 leading-relaxed ">
            <LuClock5 className="text-2xl text-[#1ae6c3]" />
            <h6 className="font-semibold text-grey-900 mt-4">Office Hours</h6>
            <p className="text-sm text-[#57616f] leading-normal">
              Mon–Sat, 8am–6pm
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-20 p-4">
          <h2 className="flex font-bold text-xl text-[#111827] border-b border-gray-200 pb-5">
            Contact Form
          </h2>
        </div>
        {/* Contact Input */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-5">
          <fieldset>
            <legend className="text-sm font-semibold text-[#1f2937]">
              Full Name
            </legend>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-input rounded-lg border border-gray-300 bg-white focus:outline-none p-3 w-full focus:border-gray-500 focus:ring-0 "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold text-[#1f2937]">
              Email
            </legend>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="form-input rounded-lg border border-gray-300 bg-white focus:outline-none p-3 w-full focus:border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold text-[#1f2937]">
              Phone Number
            </legend>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="form-input rounded-lg border border-gray-300 bg-white focus:outline-none p-3 w-full focus:border-gray-500"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </fieldset>
          <div className="flex flex-col">
            <label
              className="text-sm font-semibold text-[#1f2937]"
              htmlFor="subject"
            >
              Subject
            </label>
            <select
              id="subject"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none w-full bg-white focus:border-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Subject
              </option>
              <option value="general">Booking Inquiry</option>
              <option value="support">Reschedule</option>
              <option value="feedback">Feedback</option>
              <option value="feedback">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mt-6 p-4">
          <label
            className="text-sm leading-normal font-semibold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-white h-40 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
            name=""
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button className="mt-3 bg-[#1ae6c3] p-2 rounded cursor-pointer text-sm font-semibold hover:bg-[#82fce8] transition-all  mx-4">
          Send Message
        </button>
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between mt-20 py-10 items-center mx-4">
          <div className="flex flex-col">
            <h2 className="text-[#111827] font-bold">
              Have a common question?
            </h2>
            <p className="text-sm text-[#57616f]">
              Find answers to frequently asked questions instantly.
            </p>
          </div>

          <div>
            <button className="bg-[#d1faf3] p-2 rounded-lg text-sm font-semibold cursor-pointer">
              Visit our FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
