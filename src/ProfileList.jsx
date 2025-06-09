import Card from './Card';
import profilePic from './assets/profilepic.jpg';
import pics1 from './assets/1.jpg';
import pics2 from './assets/2.jpg';
import pics3 from './assets/3.jpg';
import pics4 from './assets/4.jpg';
import pics5 from './assets/5.jpg';
import pics6 from './assets/6.jpg';
import pics7 from './assets/7.jpg';

const profiles = [
  { name: "Jaymark Erojo", image: profilePic, role: "FrontEnd Developer", isStudent: true, age: 20,},
  { name: "Chicoy Wamar", image: pics1, role: "Quality Tester", isStudent: true, age: 20 },
  { name: "Wellboy Parallon", image: pics2, role: "UI Designer",  isStudent: false, age: 22 },
  { name: "Jeremy Kent", image: pics3, role: "BackEnd Developer",   isStudent: true, age: 23 },
  { name: "Joseph Barbadillo", image: pics4, role: "UX Designer", isStudent: false, age: 22 },
  { name: "Divina Wamar", image: pics5, role: "FrontEnd Developer",  isStudent: true, age: 22 },
  { name: "JC Gamboa", image: pics6, role: "UX Designer", age: 22 },
  { name: "Junreil Pagalpalan", image: pics7, role: "BackEnd Developer", age: 22 },
];

function ProfileList({ onAddToTeam, onCardClick, searchTerm = "", profiles: overrideProfiles }) {
  const filteredProfiles = (overrideProfiles || profiles).filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {filteredProfiles.map((profile, index) => (
        <Card
          key={index}
          {...profile}
          onAddToTeam={onAddToTeam}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default ProfileList;
