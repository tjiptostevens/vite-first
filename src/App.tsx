import { useState } from "react";
import NavBar from "./components/NavBar";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import { PageName } from "./config/constant";
import CounterPage from "./pages/CounterPage";
import "./assets/style.css";

const App = () => {
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
          width: "100vw",
          height: "100vh",
        }}
      >
        <NavBar fnHandler={setCurrentPage} />
        <div
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentPage === PageName.COUNTER_PAGE && <CounterPage />}
          {currentPage === PageName.FORM_PAGE && <FormPage />}
          {currentPage === PageName.TABLE_PAGE && <TablePage />}
        </div>
      </div>
    </>
  );
};

export default App;
