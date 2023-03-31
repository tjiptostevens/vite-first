import { ChangeEvent, useState } from "react";

type DuoCounter = {
  firstCounter: number;
  secondCounter: number;
};

const CounterPage = () => {
  const [duoCounter, setDuoCounter] = useState<DuoCounter>({
    firstCounter: 0,
    secondCounter: 0,
  });
  const [amount, setAmount] = useState<number>(1);
  const incrementFHandler = () => {
    setDuoCounter({
      ...duoCounter,
      firstCounter: duoCounter.firstCounter + amount,
    });
  };
  const incrementSHandler = () => {
    setDuoCounter({
      ...duoCounter,
      secondCounter: duoCounter.secondCounter + amount,
    });
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const amountValue = event.currentTarget.value;
    const amountValueInt = parseInt(amountValue);
    setAmount(amountValueInt);
  };
  return (
    <section className="Duo Counter">
      <p>Value dari firstCounter adalah: {duoCounter.firstCounter}</p>
      <p>Value dari secondCounter adalah: {duoCounter.secondCounter}</p>

      <div>
        <button onClick={incrementFHandler}>Tambah (firstCounter)</button>
      </div>

      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={changeHandler}
        />
        <button onClick={incrementSHandler}>Tambah (secondCounter)</button>
      </div>
    </section>
  );
};

export default CounterPage;
