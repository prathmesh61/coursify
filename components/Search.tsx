type SearchType = {
  search: string;
  setSearch: (value: string) => void;
};
const Search = ({ search, setSearch }: SearchType) => {
  return (
    <input
      type="text"
      name="text"
      id="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search For anything..."
      className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md flex-grow"
    />
  );
};

export default Search;
