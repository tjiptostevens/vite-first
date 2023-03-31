import { ChangeEvent, useState } from "react";
import NavBar from "./components/NavBar";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import { PageName } from "./config/constant";

type DuoCounter = {
  firstCounter: number;
  secondCounter: number;
};

const App = () => {
  const [duoCounter, setDuoCounter] = useState<DuoCounter>({
    firstCounter: 0,
    secondCounter: 0,
  });
  const [amount, setAmount] = useState<number>(0);
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
  const [currentPage, setCurrentPage] = useState<PageName>(
    // Set default valuenya mengarah pada halaman Counter
    PageName.COUNTER_PAGE
  );

  return (
    <>
      <div
        className="w-100"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <NavBar fnHandler={setCurrentPage} />
        {currentPage === PageName.COUNTER_PAGE && (
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
              <button onClick={incrementSHandler}>
                Tambah (secondCounter)
              </button>
            </div>
          </section>
        )}
        {currentPage === PageName.FORM_PAGE && <FormPage />}
        {currentPage === PageName.TABLE_PAGE && <TablePage />}
      </div>
    </>
  );
};

export default App;
