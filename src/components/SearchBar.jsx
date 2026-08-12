function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-container">
      <h2>Find a Project</h2>

      <input
        type="text"
        placeholder="Type a project name..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </section>
  );
}

export default SearchBar;