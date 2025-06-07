function Student({ name, age, isStudent }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-lg text-gray-800 bg-white shadow-sm">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Student:</strong> {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
