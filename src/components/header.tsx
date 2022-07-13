/** @jsx h  */
import { h, FunctionalComponent as FC } from "htm";

const Header: FC = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img src="/assets/logo_white.webp" alt="Shreyascodes Logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
