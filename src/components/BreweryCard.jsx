export default function BreweryCard({ brewery }) {
  return (
    <div className="brewery-card">
      <div className="brewery-title">{brewery.name}</div>
      <div className="brewery-text"><strong>Type:</strong> {brewery.brewery_type}</div>
      <div className="brewery-text"><strong>City:</strong> {brewery.city}, {brewery.state}</div>
      {brewery.website_url && (
        <a
          className="brewery-link"
          href={brewery.website_url}
          target="_blank"
          rel="noreferrer"
        >
          Visit Website 🍻
        </a>
      )}
    </div>
  );
}
