function SearchBar({ searchTerm, setSearchTerm }) {
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="search-section">
      <label htmlFor="search">Search Projects</label>

      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search projects..."
      />
    </section>
  );
}

export default SearchBar;