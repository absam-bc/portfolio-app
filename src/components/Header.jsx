import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        My Portfolio
      </Link>

      <nav>
        <Link to="/">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;