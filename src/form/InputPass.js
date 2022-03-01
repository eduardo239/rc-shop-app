import { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

function InputPass({
  placeholder,
  value,
  label,
  onChange,
  buttonColor = 'primary',
}) {
  const [type, setType] = useState('password');
  const changeType = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

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
          className={`btn btn-${buttonColor}`}
          onClick={changeType}
        >
          {<MdOutlineRemoveRedEye />}
        </button>
      </div>
    </>
  );
}

export default InputPass;
