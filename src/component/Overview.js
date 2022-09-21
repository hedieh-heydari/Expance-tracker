import { useState } from "react";
import TransactionForm from "./TransactionForm";

const Overview = ({ income, expence }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>Balance:{income - expence}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>

      {isShow && <TransactionForm />}

      <div className="resultSection">
        <div>expance {expence}</div>
        <div>income {income}</div>
      </div>
    </>
  );
};

export default Overview;
