// import { useParams, useNavigate } from "react-router-dom";
// import { servicesData } from "../data/servicesData";

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const service = servicesData.find((s) => s.id === id);

//   if (!service) return <p>Service not found</p>;

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
//       >
//         Back
//       </button>

//       <h1 className="text-3xl font-black mb-4">{service.title}</h1>

//       <img
//         src={service.image}
//         alt={service.title}
//         className="w-full h-[80vh] object-contain rounded-2xl mb-6"
//       />

//       {/* Dynamic Details */}
//       <div className="space-y-4 text-gray-700">
//         {service.details.intro && <p>{service.details.intro}</p>}

//         {service.details.whatWeOffer && (
//           <ul className="list-disc pl-6">
//             {service.details.whatWeOffer.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         )}

//         {service.details.packages && (
//           <div>
//             <h2 className="text-xl font-bold mb-2">Packages</h2>
//             {service.details.packages.map((pkg) => (
//               <div key={pkg.name} className="mb-4">
//                 <p className="font-semibold">{pkg.name}</p>
//                 <p className="text-sm">{pkg.description}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <button
//         // onClick={() => navigate(`/book/${service.id}`)}
//         onClick={() => navigate("/select-service")}
//         className="mt-8 bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default ServiceDetails;

import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id);

  if (!service) return <p>Service not found</p>;

  const details = service.details;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        Back
      </button>

      <h1 className="text-3xl font-black mb-4">{service.title}</h1>

      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[60vh] object-contain rounded-2xl mb-6"
      />

      {/* DYNAMIC DETAILS */}
      <div className="space-y-6 text-gray-700">
        {/* General intro */}
        {details.intro && <p>{details.intro}</p>}

        {/* Lists of items */}
        {details.whatWeOffer && (
          <Section title="What We Offer" items={details.whatWeOffer} />
        )}

        {details.treatments && (
          <Section title="Treatments" items={details.treatments} />
        )}

        {details.therapeuticCare && (
          <Section title="Therapeutic Care" items={details.therapeuticCare} />
        )}

        {details.addOns && (
          <Section title="Optional Add-Ons" items={details.addOns} />
        )}

        {details.experiences && (
          <Section title="Yoga Experiences" items={details.experiences} />
        )}

        {details.themes && <Section title="Themes" items={details.themes} />}

        {details.programs && (
          <Section title="Programs" items={details.programs} />
        )}

        {/* Packages */}
        {details.packages && (
          <div>
            <h2 className="text-xl font-bold mb-2">Packages</h2>
            {details.packages.map((pkg) => (
              <div key={pkg.name} className="mb-4">
                <p className="font-semibold text-lg">{pkg.name}</p>
                <p className="text-sm">{pkg.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Party sessions */}
        {details.sessions && (
          <div>
            <h2 className="text-xl font-bold mb-2">Party Sessions</h2>
            {details.sessions.map((session, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold text-lg">{session.duration}</p>
                <ul className="list-disc pl-6">
                  {session.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        // onClick={() => navigate(`/book/${service.id}`)}
        onClick={() => navigate("/select-service")}
        className="px-10 py-3 rounded-full bg-linear-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-text-headline text-sm font-semibold shadow-sm transition-all ease-in duration-300 hover:scale-105"
      >
        Book Now
      </button>
    </div>
  );
};

// REUSABLE SECTION COMPONENT
const Section = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <ul className="list-disc pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ServiceDetails;
