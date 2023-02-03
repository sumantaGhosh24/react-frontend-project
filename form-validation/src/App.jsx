import {useState} from "react";

import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import "./App.css";

const App = () => {
  const [view, setView] = useState("basic");

  return (
    <div className="app">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{color: view === "basic" ? "#fff" : ""}}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{color: view === "advanced" ? "#fff" : ""}}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
};

export default App;
