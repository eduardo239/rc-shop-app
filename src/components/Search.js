import { MdSearch } from 'react-icons/md';
function Search({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-wrapper__input"
        type="search"
        value={value}
        onChange={onChange}
      />
      <MdSearch />
    </div>
  );
}

export default Search;
