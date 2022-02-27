import { Link } from 'react-router-dom';

function CardGroup({ items }) {
  return (
    <div className="card-group-wrapper mb-20">
      <div className="div1">
        <Link to={`/${items[0]?._id}`}>
          <div className="card-group__title">
            <h4>{items[0]?.name || ''}</h4>
          </div>
          <img src={`${items[0]?.poster || ''}`} alt="" />
        </Link>
      </div>
      <div className="div2">
        <Link to={`/${items[1]?._id}`}>
          <div className="card-group__title">
            <h4>{items[1]?.name || ''}</h4>
          </div>
          <img src={`${items[1]?.poster || ''}`} alt="" />
        </Link>
      </div>
      <div className="div3">
        <Link to={`/${items[2]?._id}`}>
          <div className="card-group__title">
            <h4>{items[2]?.name || ''}</h4>
          </div>
          <img src={`${items[2]?.poster || ''}`} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default CardGroup;
