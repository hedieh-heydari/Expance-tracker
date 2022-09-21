const TransactionForm = () => {
  return (
    <>
      <form>
        <input type="text" name="desc" />
        <input
          type="number"
          name="amount
        "
        />
        <div>
          <input type="radio" value="expence" name="type" />
          <label>Expence</label>

          <input type="radio" value="income" name="type" />
          <label>Income</label>
        </div>
        <button>Add transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
