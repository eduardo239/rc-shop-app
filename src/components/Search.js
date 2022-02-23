import icon_search from '../assets/icons/bi_search.svg';

function Search({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <input type="search" value={value} onChange={onChange} />
      <img className="icon" src={icon_search} alt="Pesquisa" />
    </div>
  );
}

export default Search;
