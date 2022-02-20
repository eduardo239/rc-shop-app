import Button from '../form/Button';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, content, alt, poster }) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${id}`);
  };

  return (
    <div className="card">
      <img className="card--img" src={poster} alt={alt} />
      <p className="card--title">{title}</p>
      <p className="card--content">{content}</p>
      <Button full value="Comprar" onClick={handleClick} />
    </div>
  );
}

export default Card;
