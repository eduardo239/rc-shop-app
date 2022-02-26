import Button from '../form/Button';
import apis from '../api';
import apiItem from '../api/item';
import {
  MdOutlineSave,
  MdOutlineCleaningServices,
  MdOutlineAdd,
} from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import Message from './Message';
import InputAdd from '../form/InputAdd';
import Input from '../form/Input';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ItemContext } from '../context/ItemContext';
import ButtonIcon from '../form/ButtonIcon';

function AdminCreateNewItem() {
  const { user, userInfo } = useContext(UserContext);
  const { setItems } = useContext(ItemContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [poster, setPoster] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [storage, setStorage] = useState('');
  const [storages, setStorages] = useState([]);
  const [color, setColor] = useState('#ffffff');
  const [colors, setColors] = useState([]);
  const [specs, setSpecs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    generatePoster();
    try {
      const payload = {
        name,
        poster,
        price,
        description,
        info,
        categories,
        colors,
        storages,
      };

      await apiItem.createNewItem(payload);
      const res = await apiItem.getAllItems();
      setItems(res.data.data);
    } catch (err) {
      console.log(err);
      //   const y = error.response?.data?.err?.errors;
      //   const r = Object.keys(y).map((key) => [key, y[key]]);
    }
  };
  const handleReset = () => {
    setName('');
    setDescription('');
    setPrice('');
    // setPoster('');
    setInfo('');
    setCategory('');
    setCategories([]);
    setStorage('');
    setStorages([]);
    setColor('#ffffff');
    setColors([]);
    setSpecs([]);
  };

  // generate random picture
  const generatePoster = () => {
    const random = Math.floor(Math.random() * 100);
    setPoster(`https://picsum.photos/400/400?random=${random}`);
  };

  const handleAddToArray = (type) => {
    if (type === 'colors') {
      setColors([...colors, color]);
      setColor('#ffffff');
    } else if (type === 'storages') {
      setStorages([...storages, storage]);
      setStorage('');
    } else if (type === 'categories') {
      setCategories([...categories, category]);
      setCategory('');
    } else {
      alert('Preencha o campo');
    }
  };

  useEffect(() => {
    if (user) {
      (async () => {
        generatePoster();
        if (!userInfo.isAdmin) navigate('/');
      })();
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, userInfo]);
  return (
    <section>
      <h4>Novo produto</h4>
      <form className="sign-form-2" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            label="Descrição"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <Input
            label="Preço"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <Input
            label="Poster"
            type="text"
            onChange={(e) => setPoster(e.target.value)}
            value={poster}
          />
          <Input
            label="Informações"
            type="text"
            onChange={(e) => setInfo(e.target.value)}
            value={info}
          />
          <Input
            label="Especificações"
            type="text"
            onChange={(e) => setSpecs(e.target.value)}
            value={specs}
          />
        </div>
        <div>
          <InputAdd
            label="Categorias"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            buttonValue={<MdOutlineAdd />}
            onButtonClick={(e) => handleAddToArray('categories')}
          />
          <Input
            label="Categoria"
            type="text"
            onChange={(e) => setCategories(e.target.value)}
            value={categories}
          />

          <InputAdd
            label="Armazenamento (GB)"
            type="number"
            onChange={(e) => setStorage(e.target.value)}
            value={storage}
            buttonValue={<MdOutlineAdd />}
            onButtonClick={(e) => handleAddToArray('storages')}
          />

          <Input
            label="Armazenamentos"
            type="text"
            onChange={(e) => setStorages(e.target.value)}
            value={storages}
          />
          {/* TOD: */}

          <InputAdd
            label="Cores"
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            buttonValue={<MdOutlineAdd />}
            onButtonClick={(e) => handleAddToArray('colors')}
          />
          <Input
            label="Cores"
            type="text"
            onChange={(e) => setColors(e.target.value)}
            value={colors}
          />
          <hr />

          <ButtonIcon
            iconAfter={<MdOutlineCleaningServices />}
            type="button"
            value="Reset"
            onClick={handleReset}
          />
          <ButtonIcon
            iconAfter={<MdOutlineSave />}
            type="submit"
            value="Cadastrar"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </section>
  );
}

export default AdminCreateNewItem;
