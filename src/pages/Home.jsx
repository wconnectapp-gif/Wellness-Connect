import React from "react";
import Button from "../components/sharedComponents/Button";
import { RiFlowerLine, RiLeafLine } from "react-icons/ri";
import { GrYoga } from "react-icons/gr";
import { TfiBriefcase } from "react-icons/tfi";
import { TbMoodKid } from "react-icons/tb";

import { MdOutlineNoAccounts } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";

import yoga from "/img/yoga.jpg";
import busyParent from "/img/busy-parent.jpg";
import corporate from "/img/corporate.jpg";

const Home = () => {
  const icons1 = {
    RiFlowerLine,
    GrYoga,
    RiLeafLine,
    TfiBriefcase,
    TbMoodKid,
  };

  const icons2 = {
    MdOutlineNoAccounts,
    HiOutlineBadgeCheck,
    FaUserShield,
    FaRegCalendarCheck,
  };

  const clientAvatars = {
    yoga,
    corporate,
    busyParent,
  };

  const clientFeedbackData = [
    {
      _id: 1,
      imageSrc: "yoga",
      name: "Sarah J.",
      occupation: "Yoga Enthusiast",
      feedback:
        "Booking was incredibly easy and the yoga instructor was fantastic. I felt so refreshed afterwards. Will definitely be using Wellness Connect again",
    },
    {
      _id: 2,
      imageSrc: "corporate",
      name: "Mark Chen",
      occupation: "Corporate Manager",
      feedback:
        "We arranged a corporate wellness day through the platform. The process was seamless and our team loved the activities. Highly recommended",
    },
    {
      _id: 3,
      imageSrc: "busyParent",
      name: "Emily R.",
      occupation: "Busy Parent",
      feedback:
        "Finding mindful activities for my kids has never been simpler. That booking is instant and the quality of the providers is top-notch. A lifesaver",
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="bg-linear-to-b from-teal-100 from-45% to-teal-50 p-3 md:p-10">
        <div className="w-full md:max-w-6xl md:mx-auto py-12">
          <header className="relative flex flex-col gap-6 p-10 md:p-30 items-center justify-center rounded-2xl bg-[url('../../public/img/hero.jpg')] bg-cover bg-center">
            <div className="absolute bg-black/30 inset-0 rounded-2xl"></div>
            <h1 className="capitalize text-5xl md:text-7xl text-center font-semibold text-white z-1">
              Book Wellness Services Anytime - Stress Less, Live Better
            </h1>

            <div className="flex flex-col gap-10 z-1">
              <p className="text-white font-medium text-xl text-center">
                From corporate wellness programs to mindful kids activities —
                schedule instantly and enjoy a seamless wellness experience.
              </p>

              <div className="flex justify-center">
                <Button btnText={"Book a Service"} pageUrl={"#"} />
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* Brief about us */}
      <section className="bg-gray-100 p-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {[
              {
                _id: 1,
                icon: "RiFlowerLine",
                name: "Spa & Yoga Party Experiences",
                desc: "Luxury wellness",
              },
              {
                _id: 2,
                icon: "GrYoga",
                name: "Yoga Experience Packages",
                desc: "Holistic wellness",
              },
              {
                _id: 3,
                icon: "RiLeafLine",
                name: "Lifestyle Wellness",
                desc: "Everyday wellness",
              },
              {
                _id: 4,
                icon: "TfiBriefcase",
                name: "Corporate Wellness",
                desc: "Workplace wellness",
              },
              {
                _id: 5,
                icon: "TbMoodKid",
                name: "Kids Yoga",
                desc: "Mindful wellness",
              },
            ].map((item, index) => {
              const Icon1 = icons1[item.icon];
              return (
                <div
                  className="bg-white rounded-2xl flex flex-col items-center gap-8 justify-center px-5 py-4 shadow-lg hover:scale-105 transition-all duration-300 ease-in group h-60 w-60"
                  key={index}
                >
                  <div className="">
                    <Icon1
                      className="text-green-400 group-hover:rotate-180 transition-all duration-300 ease-in"
                      size={40}
                    />
                  </div>

                  <div className="flex flex-col gap-2 items-center justify-center">
                    <h2 className="font-bold text-center">{item.name}</h2>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-teal-50 p-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="font-bold text-3xl md:text-5xl text-center">Why Choose Us?</h1>
              <p className="text-sm font-medium text-center">
                We provide a seamless and trustworthy experience for all your
                wellness needs.
              </p>
            </div>

            <div className="flex flex-wrap justify-between gap-5">
              {[
                {
                  _id: 1,
                  icon: "MdOutlineNoAccounts",
                  name: "Hassle-Free Booking",
                  desc: "No account required. Book wellness services instantly.",
                },
                {
                  _id: 2,
                  icon: "HiOutlineBadgeCheck",
                  name: "Peace of Mind",
                  desc: "Receive instant booking confirmation directly via email.",
                },
                {
                  _id: 3,
                  icon: "FaUserShield",
                  name: "Trusted Experts",
                  desc: "All our providers are certified and professionally vetted.",
                },
                {
                  _id: 4,
                  icon: "FaRegCalendarCheck",
                  name: "Flexible Scheduling",
                  desc: "Select times that align perfectly with your routine and lifestyle.",
                },
              ].map((item, index) => {
                const Icon2 = icons2[item.icon];
                return (
                  <div
                    className="bg-white rounded-2xl flex flex-col items-center gap-8 justify-center px-10 py-6 shadow-lg hover:scale-105 transition-all duration-300 ease-in group text-center w-60 h-auto"
                    key={index}
                  >
                    <div className="">
                      <Icon2
                        className="text-green-400 group-hover:-rotate-180 transition-all duration-300 ease-in"
                        size={40}
                      />
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center">
                      <h2 className="font-bold">{item.name}</h2>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What clients say */}
      <section className="bg-gray-100 p-20">
        <div className="flex flex-col gap-15 items-center justify-center">
          <h1 className="font-bold text-3xl md:text-5xl text-center">What Our Clients Say</h1>

          <div className="flex flex-wrap items-center justify-between gap-5">
            {clientFeedbackData.map((item, index) => {
              const avatar = clientAvatars[item.imageSrc];
              return (
                <div
                  className="bg-white shadow-lg p-8 rounded-2xl w-60 md:w-80 h-auto flex flex-col gap-8 hover:scale-105 transition-all duration-300 ease-in"
                  key={index}
                >
                  <div className="flex gap-5 items-center">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-18 w-18 rounded-full bg-teal-400/50 p-0.5 hover:scale-105 transition-all duration-300 ease-in"
                    />

                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-semibold">{item.name}</h4>
                      <small className="font-light text-sm">
                        {item.occupation}
                      </small>
                    </div>
                  </div>

                  <p className="font-light">{item.feedback}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Journey starts here */}
      <section className="bg-teal-50 px-20 py-30">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="font-bold text-3xl md:text-5xl text-center">
            Your wellness journey starts <br /> here.
          </h1>

          <Button btnText={"Book Now"} pageUrl={"#"} />
        </div>
      </section>
    </>
  );
};

export default Home;
