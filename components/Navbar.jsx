import Image from 'next/image';
import { useState, useEffect } from 'react';
import open from '../public/open.svg'; // Replace with the actual path to your photo
import close from '../public/close.svg'; // Replace with the actual path to your photo
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    const handleOverflowChange = () => {
      if (navbar) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    };

    handleOverflowChange();

    window.addEventListener('resize', handleOverflowChange);

    return () => {
      window.removeEventListener('resize', handleOverflowChange);
      body.style.overflow = 'auto';
    };
  }, [navbar]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNavbar(false); // Close the menu when clicking the "BL" logo
  };

  const closeMenu = () => {
    setNavbar(false); // Close the menu when clicking a link
  };

  return (
    <div>
      <nav className="w-screen fixed bg-gradient-to-r from-rainbow-red from-15% via-rainbow-green via-40% to-rainbow-violet to-90%" style={{ zIndex: 2 }}>
        <div className="justify-between px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <h2 className="text-5xl font-bold font-indie-flower text-black ml-5" onClick={scrollToTop}>
                BL
              </h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={close} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={open}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="font-extrabold pb-6 text-2xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-white  border-white md:hover:text-white md:hover:bg-transparent">
                  <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
                    About
                  </ScrollLink>
                </li>
                <li className="font-extrabold pb-6 text-2xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-white  border-white md:hover:text-white md:hover:bg-transparent">
                  <ScrollLink to="skills" smooth={true} duration={500} onClick={closeMenu}>
                    Skills
                  </ScrollLink>
                </li>
                <li className="font-extrabold pb-6 text-2xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-white  border-white md:hover:text-white md:hover:bg-transparent">
                  <ScrollLink to="experience" smooth={true} duration={500} onClick={closeMenu}>
                    Experience
                  </ScrollLink>
                </li>
                <li className="font-extrabold pb-6 text-2xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-white  border-white md:hover:text-white md:hover:bg-transparent">
                  <ScrollLink to="projects" smooth={true} duration={500} onClick={closeMenu}>
                    Projects
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
