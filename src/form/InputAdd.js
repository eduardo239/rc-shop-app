function InputAdd({
  type,
  placeholder,
  value,
  label,
  onChange,
  buttonValue,
  onButtonClick,
}) {
  return (
    <>
      <label className="form-control__label" htmlFor={label}>
        {label}
      </label>
      <div className="form-control__input-button">
        <input
          id={label}
          className="form-control"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={onButtonClick}
        >
          {buttonValue}
        </button>
      </div>
    </>
  );
}

export default InputAdd;
