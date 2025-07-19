import BreweryCard from "./BreweryCard";

export default function BreweryList({ breweries }) {
  return (
    <div className="brewery-grid">
      {breweries.map((brewery) => (
        <BreweryCard key={brewery.id} brewery={brewery} />
      ))}
    </div>
  );
}
