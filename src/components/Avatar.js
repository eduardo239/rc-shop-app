function Card({ url }) {
  return (
    <div className="user-avatar">
      <img src={url} alt="avatar" className="user-avatar__img" />
    </div>
  );
}

export default Card;
