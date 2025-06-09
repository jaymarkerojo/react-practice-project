import React, { useState, useEffect } from 'react';
import ProfileList from './ProfileList';
const profiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(initialMembers);

  useEffect(() => {
    const results = initialMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(results);
  }, [searchTerm]); 
  return (
    <div>
      <input
        type="text"
        placeholder="Search team members..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', margin: '20px 0', width: '300px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMemberList