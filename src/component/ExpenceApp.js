import { useState } from "react";

const ExpenceApp = () => {
  const [expance, setExpance] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <>
      expance tracker
      <p>Balance:{income - expance}</p>
      <button>Add</button>
      <div>expance</div>
      <div>income</div>
    </>
  );
};

export default ExpenceApp;
