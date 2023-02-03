import {useState, useEffect} from "react";

const App = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#eee",
      }}
    >
      <span
        style={{
          borderRadius: "7px",
          fontSize: "48px",
          padding: "16px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "black",
          background: "#fff",
        }}
      >
        {date.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default App;
