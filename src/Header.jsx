function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-800 m-5">Team Palahubog</h1>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
