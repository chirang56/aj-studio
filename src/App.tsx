import Navbar from "@/scenes/navbar/";
import { useState } from "react";

enum SelectedPage {
  Home = "home",
  About = "about",
  Services = "services",
  Contact = "contact",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<string>(
    SelectedPage.Home
  );

  return (
      <div className="app bg-stone-200">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
  );
};

export default App;
