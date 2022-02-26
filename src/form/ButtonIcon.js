function ButtonIcon({ iconBefore, iconAfter, value, full, onClick, type }) {
  return (
    <button
      className={`${
        iconAfter || iconBefore ? 'btn-and-icon' : 'btn'
      } btn-primary ${full ? 'btn-full' : ''}`}
      onClick={onClick}
      type={type}
    >
      {iconBefore} {value} {iconAfter}
    </button>
  );
}

export default ButtonIcon;
