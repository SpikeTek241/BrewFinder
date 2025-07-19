export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #d7bba5",
        backgroundColor: "#fff8f0",
        color: "#4e342e",
        width: "100%",
        maxWidth: "300px",
      }}
    />
  );
}
