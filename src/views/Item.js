import { useParams } from 'react-router-dom';
import poster_default from '../assets/cel.png';
import Button from '../form/Button';

function Item() {
  const { id } = useParams();

  const handleBuy = () => {
    console.log('buying');
  };

  return (
    <section className="item-wrapper">
      <div>
        <img src={poster_default} alt="" />
      </div>

      <div>
        <h2>Title: {id}</h2>
        <p>Description</p>
        <hr />
        <div>
          <span>Color: RED, BLU</span>
        </div>
        <div>
          <span>Armazenamento: 64, 128</span>
        </div>
        <hr />
        <Button value="Comprar" onClick={handleBuy} />
      </div>
    </section>
  );
}

export default Item;
