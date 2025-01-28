import React from "react";
import ReactDOM from "react-dom/client";
import { ReactPiP } from "react_pip"; // Import your library locally

const MyCustomComponent = () => <p>This is rendered inside the PiP window!</p>;

const App = () => {
  return (
    <div>
      <h1>React PiP Library Test</h1>
      <ReactPiP
        Component={<MyCustomComponent />}
        title="Test PiP Window"
        width={400}
        height={200}
        openButton={<button  style={{
          padding: "10px 20px",
          backgroundColor: "#007AFF",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginRight: "10px",
        }}>Open PiP</button>}
        closeButton={<button  style={{
          padding: "10px 20px",
          backgroundColor: "#E05242",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}>Close PiP</button>}
      />
    </div>
  );
};

export default  App;