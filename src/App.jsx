import ProfileList from './ProfileList';
import Header from './Header';
function App() {
  return (
    <>
     <Header/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <ProfileList />
    </div>
    </>
  );
}

export default App;
