import "./Header.css";

export const Header = ({ showMenu }) => (
  <header>
    <div className="header__content container">
      <a href="./index.html">
        <div className="site-logo"></div>
      </a>
      {showMenu ? (
        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      ) : (
        ""
      )}
    </div>
  </header>
);
