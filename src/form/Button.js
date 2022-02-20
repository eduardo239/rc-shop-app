function Button({ value, full, onClick }) {
  return (
    <button
      className={`btn btn-primary ${full ? 'btn-full' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
