import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">🍺 BrewFinder</h2>
      <ul className="nav-links">
        <li>
          <a
            href="#"
            className={active === "Dashboard" ? "active" : ""}
            onClick={() => setActive("Dashboard")}
          >
            🏠 Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className={active === "Search" ? "active" : ""}
            onClick={() => setActive("Search")}
          >
            🔍 Search
          </a>
        </li>
        <li>
          <a
            href="#"
            className={active === "About" ? "active" : ""}
            onClick={() => setActive("About")}
          >
            ℹ️ About
          </a>
        </li>
      </ul>
    </nav>
  );
}

