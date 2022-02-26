import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { MdOutlineAttachMoney } from 'react-icons/md';
import apiItem from '../api/item';
import poster_default from '../assets/cel.png';
import ButtonIcon from '../form/ButtonIcon';
import { UserContext } from '../context/UserContext';
import Input from '../form/Input';
function Item() {
  const { order, setOrder } = useContext(OrderContext);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    if (userInfo) {
      setOrder({
        ...order,
        userId: userInfo._id,
        items: [
          ...order.items,
          {
            itemId: item._id,
            price: item.price,
            promo: '',
            quantity: parseFloat(quantity),
            total: item.price * parseFloat(quantity),
            name: item.name,
            color: item.colors[0],
            storage: item.storages[0],
          },
        ],
      });
    } else {
      alert('Para comprar é necessário estar logado');
    }
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (id) {
        const response = await apiItem.getItemById(id);
        if (isMounted) setItem(response.data.data);
      }
    })();
    return () => (isMounted = false);
  }, [id]);

  return (
    <section className="item-wrapper">
      <div className="item-wrapper__poster">
        <h4>Title: {item.name}</h4>

        <img src={item.poster ? item.poster : poster_default} alt="" />
      </div>

      <div className="item-wrapper__info">
        <div className="flex-1">
          <h5>Cores</h5>
          <div className="item-wrapper__info-color mb-20">
            {item?.colors?.length > 0 ? (
              item.colors.map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className="btn-color-select"
                ></button>
              ))
            ) : (
              <p>Não há armazéns cadastrados</p>
            )}
          </div>
          <h5>Aramzenamento</h5>
          <div className="item-wrapper__info-color mb-20">
            {item?.storages?.length > 0 ? (
              item.storages.map((storage) => (
                <button className="btn-storage-select" key={storage}>
                  {storage} GB
                </button>
              ))
            ) : (
              <p>Não há armazéns cadastrados</p>
            )}
          </div>
          <div>
            <p>Description: {item.description}</p>
          </div>

          <Input
            label="Quantidade"
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>

        <ButtonIcon
          iconAfter={<MdOutlineAttachMoney />}
          value="Comprar"
          onClick={handleBuy}
        />
      </div>
    </section>
  );
}

export default Item;
