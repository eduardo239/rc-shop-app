function Message({ value, onChange, type }) {
  return (
    <div
      className={`message-wrapper ${type === 'error' ? 'message-error' : ''}`}
    >
      {value}
    </div>
  );
}

export default Message;
