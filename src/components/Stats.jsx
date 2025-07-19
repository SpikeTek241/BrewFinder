export default function Stats({ total, states, micros }) {
  return (
    <>
      <div className="stat-card">
        <h3>Total Breweries</h3>
        <p>{total}</p>
      </div>
      <div className="stat-card">
        <h3>States Represented</h3>
        <p>{states}</p>
      </div>
      <div className="stat-card">
        <h3>Microbreweries</h3>
        <p>{micros}</p>
      </div>
    </>
  );
}
