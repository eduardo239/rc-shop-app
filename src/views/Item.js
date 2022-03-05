import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import { UserContext } from "../context/UserContext";
import {
  addItemToFavorites,
  buy,
  checkIfObjectIsInArrayOrder,
  convertToCurrency,
  promoCode,
  removeItemFromFavorites,
} from "../helper";
import {
  MdOutlineAdd,
  MdOutlineAttachMoney,
  MdOutlineStarBorderPurple500,
} from "react-icons/md";
import apiItem from "../api/item";
import poster_default from "../assets/celular.png";
import ButtonIcon from "../form/ButtonIcon";
import Input from "../form/Input";
import InputAdd from "../form/InputAdd";
import Message from "../components/Message";
import apis from "../api";
import ItemTitle from "../component/ItemTitle";
import ItemTitleFav from "../component/ItemTitleFav";
import ItemColors from "../component/ItemColors";
import ItemStorage from "../component/ItemStorage";
import ItemPromo from "../component/ItemPromo";

function Item() {
  const { order, setOrder } = useContext(OrderContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [promo, setPromo] = useState("");
  const [promoValid, setPromoValid] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [defaultColor, setDefaultColor] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);

  const handleBuy = () => {
    setMessage("");

    if (!selectedColor) {
      setMessage("Selecione a cor do produto.");
      return;
    }

    if (!selectedStorage) {
      setMessage("Selecione um tamanho de armazenamento.");
      return;
    }

    const contain = checkIfObjectIsInArrayOrder(
      item._id,
      selectedColor,
      selectedStorage,
      order.items
    );

    if (contain) {
      setMessage("Produto já adicionado ao carrinho.");
      return;
    }

    if (userInfo) {
      buy(
        order,
        userInfo,
        item,
        promoValid,
        promo,
        discount,
        quantity,
        selectedColor,
        selectedStorage,
        setOrder
      );

      setMessage("Produto adicionado ao carrinho");
    } else {
      alert("Para comprar é necessário estar logado");
    }
  };

  const handlePromoCode = async (promo) => {
    setMessage("");
    setPromo(promo);
    promoCode(promo, setDiscount, setPromoValid);
    if (promoValid) {
      setMessage("Promoção válida");
    } else {
      setMessage("Promoção inválida");
    }
  };

  const handleAddToFavorite = async () => {
    if (userInfo) {
      addItemToFavorites(item, userInfo, setMessage, setUserInfo);
    } else {
      alert("Para adicionar aos favoritos é necessário estar logado");
    }
  };

  const handleRemoveFromFavorite = async (itemId) => {
    if (userInfo) {
      removeItemFromFavorites(itemId, userInfo, setMessage, setUserInfo);
    } else {
      alert("Para remover dos favoritos é necessário estar logado");
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
          navigate("/product-not-found");
        }
      }
    })();
    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    let isMounted = true;

    if (userInfo) {
      (async () => {
        const { data } = await apis.checkIfItemIsFavorite(userInfo.uid, {
          favoriteId: item._id,
        });

        if (isMounted && data.response) {
          setAlreadyFavorite("Este item já está adicionado aos favoritos.");
        }
      })();
    }
    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <section className="item-wrapper">
      <div
        className="item-wrapper__poster"
        style={{ background: defaultColor || selectedColor }}
      >
        <ItemTitle item={item} />

        <ItemTitleFav
          item={item}
          alreadyFavorite={alreadyFavorite}
          handleRemoveFromFavorite={handleRemoveFromFavorite}
          handleAddToFavorite={handleAddToFavorite}
        />

        <img
          className="card-group__img"
          src={item.poster ? item.poster : poster_default}
          alt={item.name || "Produto"}
        />
      </div>

      <div className="item-wrapper__info">
        <div className="flex-1">
          <ItemColors item={item} handleChangeColor={handleChangeColor} />
          <hr />
          <ItemStorage item={item} setSelectedStorage={setSelectedStorage} />
          <hr />
          <div>
            <p>{item.description}</p>
          </div>
          <div className="mb-10">
            <Input
              label="Quantidade"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
        </div>

        <div className="mb-10">
          <ItemPromo item={item} promoValid={promoValid} discount={discount} />
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
