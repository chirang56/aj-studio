import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/abouts";
import Service from "@/scenes/services";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="app bg-stone-200">
        <Navbar
            isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Home setSelectedPage={setSelectedPage}/>
        <About setSelectedPage={setSelectedPage}/>
        <Service setSelectedPage={setSelectedPage}/>
      </div>
  );
};

export default App;
