
import React, {useState} from "react";

function Button(props) {

  const [error, setError] = useState(false);
  const [dollarAmount, setDollarAmount] = useState("");

  const handleChange = (event) => {
    const { value, type, checked } = event.target;
    const theValue = type === 'checkbox' ? checked : value;
    setDollarAmount(theValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();
  }

  const handleValidation = (event) => {
    const regex = /^-?(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d+)?$/;
    if (dollarAmount && regex.test(dollarAmount)) {
      setError(false)
    }
    else {
      setError(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">$</div>
          </div>
          <input className={!error ? "form-control dollar-amount" : "form-control dollar-amount is-invalid" } onChange={handleChange} onBlur={handleValidation} value={dollarAmount} type="text" placeholder="0.00" />
          <div className="input-group-append">
            <button className="btn btn-primary btn-lg" type="submit">Count Coins</button>
          </div>
        </div>
        {/* { error ? <p className="form-text text-danger text-left">Please provide a dollar amount</p> : null } */}
      </form>
    </>
  );
}

export default Button;


