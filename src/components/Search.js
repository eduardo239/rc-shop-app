import { MdSearch } from 'react-icons/md';
function Search({ value, placeholder, onChange }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-wrapper__input"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <MdSearch />
    </div>
  );
}

export default Search;
