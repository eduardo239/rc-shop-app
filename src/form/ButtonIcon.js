function ButtonIcon({
  iconBefore,
  iconAfter,
  value,
  full,
  onClick,
  type,
  disabled = false,
  color = 'primary',
}) {
  return (
    <button
      className={`${
        iconAfter || iconBefore ? 'btn-and-icon' : 'btn'
      } btn-${color} ${full ? 'btn-full' : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {iconBefore} {value} {iconAfter}
    </button>
  );
}

export default ButtonIcon;
