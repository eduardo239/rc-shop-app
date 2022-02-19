import Button from '../form/Button';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, content, alt, poster }) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${id}`);
  };

  return (
    <div>
      <img src={poster} alt={alt} />
      <h1>{title}</h1>
      <p>{content}</p>
      <Button value="Comprar" onClick={handleClick} />
    </div>
  );
}

export default Card;
