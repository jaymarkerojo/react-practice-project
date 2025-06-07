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
  { name: "Jaymark Erojo", image: profilePic, description: "FrontEnd Developer", age: 20 },
  { name: "Chicoy Wamar", image: pics1, description: "Quality Tester", age: 20 },
  { name: "Wellboy Parallon", image: pics2, description: "UI Designer", age: 22 },
  { name: "Jeremy Kent", image: pics3, description: "BackEnd Developer", age: 23 },
  { name: "Joseph Barbadillo", image: pics4, description: "UX Designer", age: 22 },
  { name: "Divina Wamar", image: pics5, description: "FrontEnd Developer", age: 22 },
  { name: "JC Gamboa", image: pics6, description: "UX Designer", age: 22 },
  { name: "Junreil Pagalpalan", image: pics7, description: "BackEnd Developer", age: 22 },
];

function ProfileList() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {profiles.map((profile, index) => (
        <Card key={index} {...profile} />
      ))}
    </div>
  );
}

export default ProfileList;
