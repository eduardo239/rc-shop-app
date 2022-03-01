import Button from '../form/Button';
import { Link, useNavigate } from 'react-router-dom';

function Card({ id, title, content, alt, poster, colors, storages, specs }) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${id}`);
  };
  console.log(colors[0]);
  return (
    <div className="card" style={{ background: colors[0] }}>
      <Link to={`/${id}`}>
        <img className="card-img" src={poster} alt={alt} />
      </Link>
      <p className="card-title">
        {title.length > 30 ? title.slice(0, 34) + '...' : title}
      </p>
      {/* <p className="card-content">
        {content.length > 90 ? content.slice(0, 90) + '...' : content}
      </p> */}
      <Button full value="Ver mais" onClick={handleClick} />
    </div>
  );
}

export default Card;
