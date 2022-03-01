function Button({
  icon,
  iconLabelBefore,
  iconLabelAfter,
  value,
  full,
  onClick,
  type,
  color = 'primary',
}) {
  return (
    <button
      className={`${icon ? 'btn-icon' : 'btn'} btn-${color} ${
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
