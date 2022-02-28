function Input({
  type,
  placeholder,
  value,
  label,
  disabled = false,
  onChange,
}) {
  return (
    <>
      <label className="form-control__label" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        className="form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={label}
        disabled={disabled}
      />
    </>
  );
}

export default Input;
