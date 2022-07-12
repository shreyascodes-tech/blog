/** @jsx h  */
import { h, FunctionalComponent as FC } from "htm";

const Header: FC<{}> = () => {
  return (
    <header
      style={{
        padding: "1rem 0 .5rem 0",
        marginBottom: "1rem",
        background: "#0d131d",
        boxShadow: "0 3px 5px #18325827",
      }}
    >
      <div
        style={{
          maxWidth: "1536px",
          margin: "0 auto",
        }}
      >
        <a href="/">
          <img
            src="https://shreyascodes.tech/build/_assets/logo_wide-73JBJKH5.svg"
            alt="Shreyascodes Logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
