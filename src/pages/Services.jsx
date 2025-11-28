// import React from 'react'
// import SelectService from './SelectService'

// const Services = () => {
//   return (
//     <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
//       <SelectService />
//     </div>
//   )
// }

// export default Services;

import { servicesData } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

