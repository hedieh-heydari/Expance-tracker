import { useState } from "react";
import Overview from "./Overview";
import Transaction from "./Transaction";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    console.log(formValues);
    const data = {...formValues, id : Date.now()}
    setTransaction([...transaction, data])
  };

  return (
    <>
      <section className="container">
        <Overview
          income={income}
          expence={expence}
          addTransaction={addTransaction}
        />
        <Transaction transaction={transaction} />
      </section>
    </>
  );
};

export default ExpenceApp;
