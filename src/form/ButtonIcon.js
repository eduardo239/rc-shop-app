function ButtonIcon({
  iconBefore,
  iconAfter,
  value,
  full,
  onClick,
  type,
  disabled,
}) {
  return (
    <button
      className={`${
        iconAfter || iconBefore ? 'btn-and-icon' : 'btn'
      } btn-primary ${full ? 'btn-full' : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {iconBefore} {value} {iconAfter}
    </button>
  );
}

export default ButtonIcon;
