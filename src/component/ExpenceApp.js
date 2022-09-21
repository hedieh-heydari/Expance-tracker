import { useState } from "react";
import Overview from "./Overview";
import Transaction from "./Transaction";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <>
      <section className="container">
        <Overview income={income} expence={expence} />
        <Transaction transaction={transaction} />
      </section>
    </>
  );
};

export default ExpenceApp;
