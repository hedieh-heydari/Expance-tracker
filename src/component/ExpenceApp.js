import { useState } from "react";
import Transaction from "./Transaction";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <>
      <section className="container">
        <div className="topSection">
          <p>Balance:{income - expence}</p>
          <button>Add</button>
        </div>
        <div className="resultSection">
          <div>expance {expence}</div>
          <div>income {income}</div>
        </div>
        <Transaction transaction={transaction} />
      </section>
    </>
  );
};

export default ExpenceApp;
