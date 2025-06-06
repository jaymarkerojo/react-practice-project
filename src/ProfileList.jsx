import Card from './Card';
import profilePic from './assets/profilepic.jpg';
import pics1 from './assets/1.jpg';
import pics2 from './assets/2.jpg';
import pics3 from './assets/3.jpg';
import pics4 from './assets/4.jpg';

const profiles = [
  {
    name: "Jaymark",
    image: profilePic,
    description: "FrontEnd Developer",
    age: 20,
  },
  {
    name: "Chicoy",
    image: pics1,
    description: "Quality Tester",
    age: 20,
  },
  {
    name: "Wellboy",
    image: pics2,
    description: "UI Designer",
    age: 22,
  },
  {
    name: "Jeremy",
    image: pics3,
    description: "BackEnd Developer",
    age: 23,
  },
  {
    name: "Joseph",
    image: pics4,
    description: "UX Designer",
    age: 22,
  }
];

function ProfileList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {profiles.map((profile, index) => (
        <Card
          key={index}
          name={profile.name}
          image={profile.image}
          description={profile.description}
          age={profile.age}
        />
      ))}
    </div>
  );
}

export default ProfileList;
