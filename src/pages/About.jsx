import React from "react";
import { FaHourglass, FaLeaf, FaSeedling, FaShield } from "react-icons/fa6";
import { FaFeather } from "react-icons/fa6";
import MaryImg from "../assets/Mary.jpeg";
import Well_connectImg from "../assets/well_connect.png";

const About = () => {
  return (
    <>
      <div className="bg-[#f7f8f8] w-full h-full ">
        {/* About Us */}
        <div className="flex justify-center mx-auto items-center h-screen gap-10 py-10 px-30 bg-[#f0fdfa] text-wrap">
          <div className="flex flex-col max-w-5xl">
            <h2 className="font-extrabold text-3xl text-gray-600 text-left">
              About Wellness Connect
            </h2>
            <p className=" text-[#4f9791] max-w-2xl mt-5 text-left">
              Wellness Connect provides a calm space created with intention. A
              space where individuals, families, and teams reconnect with
              balance and well-being. At Wellness Connect, we guide you through
              gentle, mindful practices that support both emotional and physical
              health. From private sessions to family practices, kids’ yoga, and
              corporate wellness, we bring calm into the moments that matter.
              Wellness here is simple, accessible, and designed to help you feel
              grounded, present, and connected to yourself.
            </p>
          </div>
          <div>
            <img
              src={Well_connectImg}
              alt="A team"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Mission and vision section */}
        <section>
          <div className="flex pt-20 justify-between max-w-5xl mx-auto  gap-10 text-wrap p-10">
            <div className="flex flex-col items-start shadow-xl rounded-xl p-3">
              <FaLeaf size={30} className="text-[#4f9791] mb-1" />

              <h1 className="text-2xl text-gray-600 font-bold text-center ">
                Our Mission
              </h1>
              <p className="text-[#4f9791] m-2">
                To guide individuals, families, and workplaces toward a more
                balanced, mindful lifestyle through simple, accessible, and
                nurturing wellness experiences.
              </p>
            </div>
            <div className="flex flex-col items-start shadow-xl rounded-xl p-3">
              <FaLeaf size={30} className="text-[#4f9791] mb-1" />
              <h1 className="text-2xl text-gray-600 font-bold ">Our Vision</h1>
              <p className="text-[#4f9791] m-2">
                To inspire a world where wellness feels natural, intentional,
                and beautifully woven into everyday life — at home, in schools,
                and in the workplace.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <section>
            <div className="flex flex-col items-center p-10 mt-20 text-center max-w-5xl mx-auto">
              <FaFeather
                size={30}
                className="text-[#4f9791] mb-1 text-center flex justify-center"
              />
              <h1 className="text-2xl text-gray-600 font-bold ">Our Story</h1>
              <p className="text-[#4f9791]">
                Wellness Connect began with a simple intention: to create a
                space where anyone could experience calm, movement, and
                connection without pressure or perfection. What started as a
                passion for mindful movement has grown into a holistic wellness
                offering supporting: adults seeking personal well-being families
                and children learning mindful habits schools integrating
                movement and emotional wellness corporate teams reducing stress
                and preventing burnout Our approach is gentle, welcoming, and
                designed for every body — no intimidation, no expectations, just
                mindful connection.
              </p>
            </div>
          </section>
        </section>
        {/* Meet the Founder*/}
        <section>
          <div className="flex justify-around mt-20 py-10 px-30 items-center bg-[#f0fdfa] text-wrap gap-5 w-full ">
            <div className="max-w-5xl ">
              <h1 className="text-xl text-gray-600 font-bold">
                Meet The Founder
              </h1>

              <p className="text-sm text-[#4f9791]">
                Mary Gbemisola Faniyi — Founder & Wellness Guide
              </p>

              <p className="text-gray-600 mt-2 text-left">
                Mary created Wellness Connect from a deep love for calm spaces,
                emotional well-being, and intentional movement. <br /> Her
                sessions are guided with warmth, presence, and the belief that
                wellness should feel nurturing — not overwhelming. <br /> She
                brings a grounded, heart-centered approach to every session,
                making wellness accessible to individuals, families, and
                corporate teams.
              </p>
            </div>

            <div className="shadow-2xl">
              <img
                src={MaryImg}
                alt="Mary Gbemisola"
                className="h-auto w-100 rounded-xl"
              />
            </div>
          </div>
        </section>
        {/* Our Values */}
        <section>
          <div className="flex flex-col  p-6 mt-20 text-center max-w-5xl mx-auto">
            <div className=" flex flex-col justify-center items-center max-w-5xl p-10 space-y-3">
              <FaSeedling size={30} className="text-[#4f9791]" />
              <h1 className="text-3xl text-gray-600 font-bold ">Our Values</h1>

              <ul className="text-[#4f9791] mt-2 text-center space-y-3 ">
                <li>Mindfulness in every moment</li>
                <li>Warm, supportive guidance</li>
                <li>Simple, accessible wellness </li>
                <li>Calm spaces for adults and children</li>
                <li>Intentional and joyful experiences</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Why people Choose Us */}
        <section>
          <div className="flex flex-col items-center p-10 mt-20 text-center mx-auto w-full bg-[#f0fdfa]">
            <div className="flex flex-col justify-center items-center max-w-5xl p-10 space-y-3">
              <FaShield
                size={30}
                className="text-[#4f9791] mb-1 text-center flex justify-center"
              />
              <h1 className="text-3xl text-gray-600 font-bold ">
                Why People Choose Us
              </h1>
              <p className="text-[#4f9791] mt-2 text-center ">
                Gentle, personalized sessions for individuals, families, and
                teams Corporate wellness programs that reduce stress and boost
                focus Flexible options for home, studio, school, office, and
                events Wellness experiences for all ages Specialty offerings for
                birthdays, family bonding, and mindful celebrations
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center p-10 mt-20 text-center mx-auto">
            <div className="flex flex-col justify-center items-center max-w-5xl p-10 space-y-3">
              <FaHourglass
                size={30}
                className="text-[#4f9791] mb-1 text-center flex justify-center"
              />
              <h2 className="text-3xl text-gray-600 font-bold ">
                Ready To Begin Your Wellness Journey?
              </h2>
              <p className="text-[#4f9791] mt-2 text-center">
                Whether it’s personal, family, or corporate wellness, you
                deserve moments of peace and balance. <br /> Let’s create them
                together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
