import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../form/Button';
import Input from '../form/Input';
import axios from 'axios';
import CartTableAddress from './CartTableAddress';

function CartAddress() {
  let navigate = useNavigate();
  const [zipcode, setZipcode] = useState('');
  const [number, setNumber] = useState('');
  const [comp, setComp] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
  });

  const handleChange = async (zipcode) => {
    setZipcode(zipcode);

    if (zipcode.length === 8) {
      const response = await axios.get(
        `https://viacep.com.br/ws/${zipcode}/json/`
      );
      const data = await response.data;
      setAddress({
        street: data.logradouro,
        number: number,
        complement: comp,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
        country: data.ibge,
        zipcode: data.cep,
      });
    }
  };

  const handleNumber = (number) => {
    setNumber(number);
    setAddress({ ...address, number });
  };

  const handleComplement = (complement) => {
    setComp(complement);
    setAddress({ ...address, complement });
  };

  console.log(address);

  return (
    <section>
      <div>
        <Input
          type="number"
          value={zipcode}
          onChange={(e) => handleChange(e.target.value)}
        ></Input>
        <Input
          type="number"
          value={number}
          onChange={(e) => handleNumber(e.target.value)}
        ></Input>
        <Input
          type="text"
          value={comp}
          onChange={(e) => handleComplement(e.target.value)}
        ></Input>
      </div>

      <div>
        <CartTableAddress address={address} />
      </div>
      <div>
        <Button value="Voltar" onClick={() => navigate(`/cart`)} />
        <Button value="Próximo" onClick={() => navigate(`/cart/payment`)} />
      </div>
    </section>
  );
}

export default CartAddress;
