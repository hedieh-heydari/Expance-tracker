import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [formValues, setformValues] = useState({
    type: "expence",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues)
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="desc"
          onChange={changeHandler}
          value={formValues.desc}
        />
        <input
          type="number"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
        />
        <div>
          <input
            type="radio"
            value="expence"
            name="type"
            onChange={changeHandler}
            checked={formValues.type === "expence"}
          />
          <label>Expence</label>

          <input
            type="radio"
            value="income"
            name="type"
            onChange={changeHandler}
            checked={formValues.type !== "expence"}
          />
          <label>Income</label>
        </div>
        <button>Add transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
