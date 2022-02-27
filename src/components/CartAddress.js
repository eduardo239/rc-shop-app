import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import axios from 'axios';
import Input from '../form/Input';
import ButtonIcon from '../form/ButtonIcon';
import CartTableAddress from './CartTableAddress';
import Message from './Message';

function CartAddress() {
  const { setAddress, address, order, setOrder } = useContext(OrderContext);

  let navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [zipcode, setZipcode] = useState(
    address?.zipcode ? address.zipcode : ''
  );
  const [number, setNumber] = useState(address ? address.number : '');
  const [comp, setComp] = useState(address ? address.complement : '');
  const [a, setA] = useState({
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
  });

  const handleZipcode = async (zipcode) => {
    setZipcode(zipcode);
    setMessage('');

    if (zipcode.length === 8) {
      const response = await axios.get(
        `https://viacep.com.br/ws/${zipcode}/json/`
      );

      const data = await response.data;
      console.log(data.erro);
      if (data.erro) {
        setMessage('CEP inválido');
      } else {
        setA({
          street: data.logradouro,
          district: data.bairro,
          city: data.localidade,
          state: data.uf,
          country: data.ibge,
          zipcode: data.cep.replace('-', ''),
        });
      }
    }
  };

  const handleNumber = (number) => {
    setNumber(number);
    setA({ ...a, number });
  };

  const handleComplement = (complement) => {
    setComp(complement);
    setA({ ...a, complement });
  };

  const handleChange = () => {
    setAddress(a);
    setOrder({ ...order, address: a });
  };

  useEffect(() => {
    if (address) {
      setA({
        street: address.street,
        district: address.district,
        number: address.number,
        complement: address.complement,
        city: address.city,
        state: address.state,
        country: address.country,
        zipcode: address.zipcode,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h3>Endereço</h3>
      <form className="sign-form-2 mb-20" onChange={handleChange}>
        <div>
          <Input
            label="CEP"
            type="number"
            value={zipcode}
            onChange={(e) => handleZipcode(e.target.value)}
            placeholder="Digite o CEP, somente números"
          ></Input>
        </div>
        <div>
          <Input
            label="Número"
            type="number"
            value={number}
            onChange={(e) => handleNumber(e.target.value)}
            placeholder="Digite o número do local"
          ></Input>
        </div>
        <div>
          <Input
            label="Complemento"
            type="text"
            value={comp}
            onChange={(e) => handleComplement(e.target.value)}
            placeholder="Digite o complemento do local, se houver"
          ></Input>
        </div>
      </form>

      <div className="mb-20">
        {message && <Message type="error" value={message} />}
      </div>

      <div className="mb-10">
        <CartTableAddress address={a} />
      </div>

      <div>
        <ButtonIcon
          value="Voltar"
          iconAfter={<MdNavigateBefore />}
          onClick={() => navigate(`/cart/items`)}
        />
        <ButtonIcon
          value="Próximo"
          iconAfter={<MdNavigateNext />}
          onClick={() => navigate(`/cart/payment`)}
        />
      </div>
    </section>
  );
}

export default CartAddress;
