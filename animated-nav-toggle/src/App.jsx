import {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaTimes color="white" />
                ) : (
                  <GiHamburgerMenu color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="/">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/">About</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/">Service</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default App;
