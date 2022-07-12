/** @jsx h  */
import { h, FunctionalComponent as FC } from "htm";

const Header: FC = () => {
  return (
    <header>
      <div>
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
