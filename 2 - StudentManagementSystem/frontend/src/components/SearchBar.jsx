function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by First Name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;