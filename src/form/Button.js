function Button({ value, onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
