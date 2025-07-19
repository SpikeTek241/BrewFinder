export default function Filter({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{
        padding: "10px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #d7bba5",
        backgroundColor: "#fff8f0",
        color: "#4e342e",
      }}
    >
      <option value="All">All Types</option>
      <option value="micro">Micro</option>
      <option value="regional">Regional</option>
      <option value="brewpub">Brewpub</option>
      <option value="large">Large</option>
      <option value="contract">Contract</option>
      <option value="proprietor">Proprietor</option>
    </select>
  );
}
