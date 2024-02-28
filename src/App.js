import React from "react";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {

  return (
    <>
      <Navbar />
      <Bannar />
      <div className="row">
        <Card />
      </div>
      <Form />
    </>
  );
}

export default App;