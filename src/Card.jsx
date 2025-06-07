function Card({ name, image, description, age }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-60 text-center hover:scale-105 transition-transform">
      <img
        src={image}
        alt={`${name} profile`}
        className="w-24 h-24 rounded-full mx-auto object-cover shadow"
      />
      <h2 className="text-lg font-semibold mt-4">{name}, {age}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">
        Add to Team
      </button>
    </div>
  );
}

export default Card;
