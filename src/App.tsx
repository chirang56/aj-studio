import Navbar from "@/scenes/navbar/";
import { useState } from "react";
import { SelectedPage } from "./shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
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
