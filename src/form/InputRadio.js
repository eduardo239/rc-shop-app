function InputRadio({
  placeholder,
  value,
  onChange,
  groupLabel,
  name,
  checked,
  id,
}) {
  return (
    <>
      <label className="form-control__label">{groupLabel}</label>
      <div className="form-control__radio mb-5">
        <input
          id={id}
          className="form-control"
          type="radio"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          checked={checked}
        />
        <label className="form-control__radio-label" htmlFor={id}>
          {value}
        </label>
      </div>
    </>
  );
}

export default InputRadio;
