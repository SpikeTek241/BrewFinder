import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import BreweryList from "./components/BreweryList";

export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries?per_page=50");
        const data = await response.json();
        setBreweries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching breweries:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = breweries
    .filter((brewery) => brewery.name.toLowerCase().includes(search.toLowerCase()))
    .filter((brewery) => filter === "All" ? true : brewery.brewery_type === filter);

  const total = breweries.length;
  const uniqueStates = new Set(breweries.map((b) => b.state)).size;
  const microCount = breweries.filter((b) => b.brewery_type === "micro").length;

  return (
    <div className="dashboard-layout">
      <NavBar />
      <div className="main-wrapper">
        <Header />

        <h2 className="section-title">Stats</h2>
        <div className="stats-wrapper">
          <Stats total={total} states={uniqueStates} micros={microCount} />
        </div>

        <h2 className="section-title">Search Breweries</h2>
        <div className="search-filter-wrapper">
          <SearchBar search={search} setSearch={setSearch} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>

        <h2 className="section-title">Breweries</h2>
        <div className="results-wrapper">
          {loading ? (
            <p className="loading-message">Loading breweries, grab a pint...</p>
          ) : (
            <BreweryList breweries={filtered} />
          )}
        </div>

        <footer className="footer-text">
          <p>BrewFinder © {new Date().getFullYear()} — Powered by Open Brewery DB</p>
        </footer>
      </div>
    </div>
  );
}
