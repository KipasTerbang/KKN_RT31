import { Link } from "react-router-dom";
import { useState } from "react";
import headerImageSrc from "../assets/Logo_D6_Navbar.png";

const Navbar = () => {
  const [isPanduan, setIsPanduan] = useState(true);

  const handleButtonClick = () => {
    setIsPanduan(!isPanduan);
  };
  return (
    <nav className="bg-white-500 border-2 p-2">
      <div className="mx-auto px-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:p-2">
            <Link to="/">
              <img
                src={headerImageSrc}
                alt="Logo"
                className="lg:w-full lg:h-full w-28 pe-3"
              />
            </Link>
            <p className="font-bold lg:text-2xl">
              Sistem Administrasi RT 31 Karang Joang
            </p>
          </div>
          <div>
            <Link to={isPanduan ? "/panduan" : "/"}>
              <p
                className="text-xs lg:text-2xl text-gray-500 underline mr-5 lg:mr-10"
                onClick={handleButtonClick}
              >
                {isPanduan ? "Panduan" : "Home"}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
