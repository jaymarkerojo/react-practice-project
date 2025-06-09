import { useState, useEffect } from 'react';
import Header from './Header';
import ProfileList from './ProfileList';

function App() {
  const [team, setTeam] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const savedTeam = localStorage.getItem('team');
    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team));
  }, [team]);

  const handleAddToTeam = (profile) => {
    if (!team.find((member) => member.name === profile.name)) {
      setTeam([...team, profile]);
    }
  };

  const handleRemoveFromTeam = (name) => {
    setTeam(team.filter((member) => member.name !== name));
  };

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <>
      <Header />
      <main className="pt-24 px-6 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center m-10">DevOps Team</h1>

        <input
          type="text"
          placeholder="Search by name or role..."
          className="block w-full max-w-md mx-auto mb-8 px-4 py-2 border border-gray-300 rounded shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ProfileList
          onAddToTeam={handleAddToTeam}
          onCardClick={handleCardClick}
          searchTerm={searchTerm}
        />

        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Selected Team Members</h2>
          <div className="flex flex-wrap gap-4">
            {team.map((member, index) => (
              <div key={index} className="relative">
                <div className="pointer-events-none opacity-70">
                  <ProfileList
                    profiles={[member]}
                    onAddToTeam={() => {}}
                    onCardClick={() => {}}
                    searchTerm=""
                  />
                </div>
                <button
                  onClick={() => handleRemoveFromTeam(member.name)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <img
              src={selectedProfile.image}
              className="w-24 h-24 rounded-full mx-auto mb-4"
              alt={selectedProfile.name}
            />
            <h3 className="text-xl font-semibold">{selectedProfile.name}</h3>
            <p className="text-sm text-gray-600">{selectedProfile.role}</p>
            <p className="text-sm text-gray-600">Age: {selectedProfile.age}</p>
            <p className="text-sm text-gray-600">Student: {selectedProfile.isStudent ? "Yes" : "No"}</p>
            <button
              onClick={() => setSelectedProfile(null)}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
