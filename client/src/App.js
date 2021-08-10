import React, {useState} from "react";
import './scss/main.scss';

import Form from "./components/Form";
import Coin from "./components/Coin";

function App() {
  const [coinCount, setCountCount] = useState({});

  const getCoinCount = (amount) => {
    fetch(`/api/${amount}`)
      .then((res) => res.json())
      .then((data) => setCountCount(data));
  }

  const coins = [];
  for (const [key, value] of Object.entries(coinCount)) {
    const coin = <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mt-5" key={key}>
                    <Coin coinName={key} coinCount={value}></Coin>
                  </div>
    coins.push(coin)
  }

  const jsonResult = JSON.stringify(coinCount, null, 2);

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center mt-5">
          <h1 className="mb-4">Optimal Coin Combination</h1>
          <Form getCoinCount={getCoinCount}></Form>
        </div>        
      </div>
      { jsonResult !== '{}' ? 
        <>
          <div className="row justify-content-center">
            {coins}
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-4">
              <h3 className="mt-5 mb-3">The API Result</h3>
              <code>{jsonResult}</code>
            </div>
          </div>
        </>
      : <h4 className="mt-5 mb-3 text-center font-weight-normal">Coin Count Will Show Up Here...</h4> }
    </main>
  );
}

export default App;
