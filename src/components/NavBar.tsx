import { SyntheticEvent } from "react";
import { PageName } from "../config/constant";

interface Props {
  fnHandler: (pageName: PageName) => void;
}

const NavBar = ({ fnHandler }: Props) => {
  const clickHandler = (e: SyntheticEvent, pageName: PageName) => {
    e.preventDefault();
    fnHandler(pageName);
  };
  return (
    <>
      <nav
        className="w-100"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li style={{ padding: "5px 15px" }}>
            <a href="#" onClick={(e) => clickHandler(e, PageName.COUNTER_PAGE)}>
              Counter
            </a>
          </li>
          <li style={{ padding: "5px 15px" }}>
            <a href="#" onClick={(e) => clickHandler(e, PageName.FORM_PAGE)}>
              Form
            </a>
          </li>
          <li style={{ padding: "5px 15px" }}>
            <a href="#" onClick={(e) => clickHandler(e, PageName.TABLE_PAGE)}>
              Table
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
