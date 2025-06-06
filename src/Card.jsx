
function Card({name, image, description, age}) {
  return (
    <div className="card p-4 bg-white rounded-xl shadow-md text-center w-64">
      <img
        src={image}
        alt={'${name} picture'}
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />
      <h2 className="text-xl font-semibold mt-4">{name}, {age}</h2>
      <p className="text-gray-600 text-sm mt-1 font-meduim  ">
        {description}
      </p>
    </div>
  );
}

export default Card;
