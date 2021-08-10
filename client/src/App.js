import React, {useState} from "react";
import './scss/main.scss';

import Form from "./components/Form";

function App() {
  const [countCount, setCountCount] = useState(null);

  const getCoinCount = (amount) => {
    const defaultAmount = amount | "5.99";
    fetch(`/api/${defaultAmount}`)
      .then((res) => res.json())
      .then((data) => setCountCount(JSON.stringify(data, null, 2)));
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center mt-5">
          <h1 className="mb-4">Optimal Coin Combination</h1>
          <Form onSubmit={getCoinCount}></Form>
          <p>{!countCount ? "Loading..." : countCount}</p>
        </div>
        
      </div>
    </main>
  );
}

export default App;
