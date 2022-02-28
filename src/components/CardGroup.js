import { Link } from 'react-router-dom';

function CardGroup({ items }) {
  return (
    <div className="card-group-wrapper mb-20">
      <div className="div1" style={{ background: items[0]?.colors[0] }}>
        <Link to={`/${items[0]?._id}`}>
          <div className="card-group__title">
            <h4>{items[0]?.name || ''}</h4>
          </div>
          <img
            className="card-group__img"
            src={`${items[0]?.poster || ''}`}
            alt={items[0]?.name || ''}
          />
        </Link>
      </div>
      <div className="div2" style={{ background: items[1]?.colors[0] }}>
        <Link to={`/${items[1]?._id}`}>
          <div className="card-group__title">
            <h4>{items[1]?.name || ''}</h4>
          </div>
          <img src={`${items[1]?.poster || ''}`} alt={items[1]?.name || ''} />
        </Link>
      </div>
      <div className="div3" style={{ background: items[2]?.colors[0] }}>
        <Link to={`/${items[2]?._id}`}>
          <div className="card-group__title">
            <h4>{items[2]?.name || ''}</h4>
          </div>
          <img src={`${items[2]?.poster || ''}`} alt={items[2]?.name || ''} />
        </Link>
      </div>
    </div>
  );
}

export default CardGroup;
