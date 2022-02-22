import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from '../api';
import apiItem from '../api/item';
import AdminTableUsers from '../components/AdminTableUsers';
import { UserContext } from '../context/UserContext';
import Button from '../form/Button';
import Input from '../form/Input';
import InputAdd from '../form/InputAdd';

function App() {
  const { user, userInfo } = useContext(UserContext);
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
  const [users, setUsers] = useState([]);

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
      console.log(payload);
      // await apiItem.createNewItem(payload);
    } catch (err) {
      console.log(err);
      //   const y = error.response?.data?.err?.errors;
      //   const r = Object.keys(y).map((key) => [key, y[key]]);
    }
  };

  // generate random picture
  const generatePoster = () => {
    const random = Math.floor(Math.random() * 100);
    setPoster(`https://picsum.photos/200/300?random=${random}`);
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
        if (!userInfo.isAdmin) navigate('/');
      })();
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, userInfo]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const {
        data: { data },
      } = await apis.getAllUsers();
      if (isMounted) setUsers(data);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <h2>Admin</h2>

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
          </div>
          <div>
            <InputAdd
              label="Categorias"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              buttonValue="Adicionar"
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
              buttonValue="Adicionar"
              onButtonClick={(e) => handleAddToArray('storages')}
            />

            <Input
              label="Armazenamentos"
              type="text"
              onChange={(e) => setStorages(e.target.value)}
              value={storages}
            />

            <Input
              label="Especificações"
              type="text"
              onChange={(e) => setSpecs(e.target.value)}
              value={specs}
            />

            <InputAdd
              label="Cores"
              type="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
              buttonValue="Adicionar"
              onButtonClick={(e) => handleAddToArray('colors')}
            />
            <Input
              label="Cores"
              type="text"
              onChange={(e) => setColors(e.target.value)}
              value={colors}
            />
            <hr />

            <Button value="Cadastrar" onClick={handleSubmit} />
          </div>
        </form>
      </section>

      <hr />

      <section>
        <h4>Todos os usuários</h4>
        <AdminTableUsers users={users} />
      </section>
    </section>
  );
}

export default App;
