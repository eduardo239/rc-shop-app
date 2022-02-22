function InputCheck({
  id,
  placeholder,
  value,
  onChange,
  label = '',
  name,
  checked,
  disabled,
}) {
  return (
    <div className="form-checkbox__wrapper">
      <input
        className="form-checkbox"
        type="checkbox"
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        defaultChecked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputCheck;
