import Header from './Header';
import ProfileList from './ProfileList';
import Student from './Student';

function App() {
  return (
    <>
      <Header />
      <main className="pt-24 px-6 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center m-10">DevOps Team</h1>
        <ProfileList />
        <section className="mt-16 max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Student Status</h2>
          <Student name="Jaymark" age={20} isStudent={true} />
          <Student name="Jerrymae" age={23} isStudent={false} />
          <Student name="Chicoy" age={20} isStudent={true} />
          <Student name="Joseph" age={22} isStudent={true} />
          <Student name="Divina" age={23} isStudent={false} />
          <Student name="Jc" age={18} isStudent={true} />
          <Student name="Junreil" age={22} isStudent={true} />
        </section>
      </main>
    </>
  );
}

export default App;
