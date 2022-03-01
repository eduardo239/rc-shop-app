import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { UserContext } from '../context/UserContext';
import { convertToCurrency } from '../helper';
import {
  MdOutlineAdd,
  MdOutlineAttachMoney,
  MdOutlineStarBorderPurple500,
} from 'react-icons/md';
import apiItem from '../api/item';
import poster_default from '../assets/celular.png';
import ButtonIcon from '../form/ButtonIcon';
import Input from '../form/Input';
import InputAdd from '../form/InputAdd';
import Message from '../components/Message';
import apis from '../api';

const PROMO_10 = 'PROMO10';
const PROMO_20 = 'PROMO20';

function Item() {
  const { order, setOrder } = useContext(OrderContext);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [promo, setPromo] = useState('');
  const [promoValid, setPromoValid] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [defaultColor, setDefaultColor] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleBuy = () => {
    setMessage('');

    console.log(selectedColor);

    if (!selectedColor) {
      setMessage('Selecione a cor do produto.');
      return;
    }

    if (!selectedStorage) {
      setMessage('Selecione um tamanho de armazenamento.');
      return;
    }

    if (userInfo) {
      setOrder({
        ...order,
        userId: userInfo._id,
        items: [
          ...order.items,
          {
            itemId: item._id,
            price: promoValid ? item.price - item.price * discount : item.price,
            promo: promoValid ? promo : '',
            quantity: parseFloat(quantity),
            total:
              (promoValid ? item.price - item.price * discount : item.price) *
              parseFloat(quantity),
            name: item.name,
            color: selectedColor,
            storage: selectedStorage,
          },
        ],
      });

      setMessage('Produto adicionado ao carrinho!');
    } else {
      alert('Para comprar é necessário estar logado');
    }
  };

  const handlePromoCode = async (promo) => {
    setPromo(promo);
    if (promo === PROMO_10) {
      setPromoValid(true);
      setDiscount(0.1);
      setMessage('Promoção de 10% aplicada');
    } else if (promo === PROMO_20) {
      setPromoValid(true);
      setDiscount(0.2);
      setMessage('Promoção de 20% aplicada');
    } else {
      setPromoValid(false);
      setMessage('Código inválido');
    }
  };

  const handleAddToFavorite = async () => {
    if (userInfo) {
      try {
        const payload = {
          itemId: item._id,
        };
        const response = await apis.addToFavorite(userInfo.uid, payload);
        if (response.status === 200) {
          setMessage('Item adicionado aos favoritos');
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert('Para adicionar aos favoritos é necessário estar logado');
    }
  };

  const handleChangeColor = (color) => {
    setSelectedColor(color);
    setDefaultColor(null);
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (id) {
        try {
          const response = await apiItem.getItemById(id);

          if (isMounted) {
            setItem(response.data.data);
            setDefaultColor(response.data.data.colors[0]);
          }
        } catch (err) {
          console.log(err.message);
          navigate('/product-not-found');
        }
      }
    })();
    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <section className="item-wrapper">
      <div
        className="item-wrapper__poster"
        style={{ background: defaultColor || selectedColor }}
      >
        <div className="item-wrapper__title">
          <h4>Title: {item.name}</h4>
          <p>{convertToCurrency(item.price)}</p>
        </div>

        <div className="item-wrapper__favorite">
          <NavLink to="#" onClick={() => handleAddToFavorite(item._id)}>
            <MdOutlineStarBorderPurple500 />
          </NavLink>
        </div>

        <img
          className="card-group__img"
          src={item.poster ? item.poster : poster_default}
          alt=""
        />
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
                  onClick={() => handleChangeColor(color)}
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
                <button
                  className="btn-storage-select"
                  key={storage}
                  onClick={() => setSelectedStorage(storage)}
                >
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

        <div className="mb-10">
          <h6>Preço</h6>
          {!promoValid ? (
            <>
              <h5 className="new-price">{convertToCurrency(item.price)}</h5>
            </>
          ) : (
            <>
              <h5 className="old-price">{convertToCurrency(item.price)}</h5>
              <small>Preço com código promocional</small>
              <h5 className="new-price">
                {convertToCurrency(item.price - item.price * discount)}
              </h5>
            </>
          )}
        </div>

        <div className="mb-10">
          <InputAdd
            label="Categorias"
            type="text"
            placeholder="PROMO CODE"
            onChange={(e) => setPromo(e.target.value)}
            value={promo}
            buttonValue={<MdOutlineAdd />}
            onButtonClick={(e) => handlePromoCode(promo)}
          />
        </div>

        <div className="mb-10">
          {message && <Message type="error" value={message} />}
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
