function Button({
  icon,
  iconLabelBefore,
  iconLabelAfter,
  value,
  full,
  onClick,
  type,
}) {
  return (
    <button
      className={`${icon ? 'btn-icon' : 'btn'} btn-primary ${
        full ? 'btn-full' : ''
      }`}
      onClick={onClick}
      type={type}
    >
      {iconLabelBefore} {value} {iconLabelAfter}
    </button>
  );
}

export default Button;
