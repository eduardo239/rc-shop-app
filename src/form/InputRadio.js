function InputRadio({
  id,
  placeholder,
  value,
  onChange,
  label,
  name,
  checked,
}) {
  return (
    <div className="form-radio__wrapper">
      <input
        className="form-radio"
        type="radio"
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputRadio;
