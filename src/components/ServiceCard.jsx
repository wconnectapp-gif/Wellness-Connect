import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/services/${service.id}`}
      className="block bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-44 object-cover rounded-xl mb-4"
      />

      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
      <p className="text-gray-500">{service.shortDescription}</p>
    </Link>
  );
};

export default ServiceCard;
