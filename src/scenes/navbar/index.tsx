import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.webp";
import Link from "./Link";
import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import { div } from "framer-motion/client";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-72`}>
            {/* Left Side */}
            <div>
            <p className="w-1 text-black font-serif font-bold"> CHIRANJIBI
              <span className="bg-gradient-to-br from-violet-800 to-rose-600 
                text-transparent bg-clip-text"> GAUTAM </span> </p>
            </div>
            <img className="rounded-full w-12" src={Logo} alt="logo" />

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> 
                <Link 
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> 
                <Link 
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link 
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

              </div>
              <div className={`${flexBetween} gap-8`}>
                <p> Sign In </p>
                <ActionButton setSelectedPage={setSelectedPage}> Collab With Us </ActionButton>
              </div>

            </div>
            ) : (
              <button
                className="ronded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;