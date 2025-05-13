import React from "react";

const TestPizzaLoader = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <h2>Pizza Loader GIF Test</h2>
    <img
      src="/assets/pizza-loader.gif"
      alt="Pizza Loader"
      style={{ width: "120px" }}
    />
    <p>If you see a spinning pizza GIF above, the loader works!</p>
  </div>
);

export default TestPizzaLoader;
