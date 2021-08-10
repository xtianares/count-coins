function Coin(props) {

  return (
    <>
      <h5 className="mb-3">{props.coinName}</h5>
      <div className="coin-count d-flex border rounded-circle m-auto"><span>{props.coinCount}</span></div>
    </>
  );
}

export default Coin;


