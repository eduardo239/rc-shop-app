import { useContext, useState } from 'react';
import { MdOutlineSave } from 'react-icons/md';
import { UserContext } from '../context/UserContext';
import apis from '../api';
import ButtonIcon from '../form/ButtonIcon';
import Input from '../form/Input';
import Message from './Message';

function UserEdit() {
  const { userInfo } = useContext(UserContext);

  const [email, setEmail] = useState(userInfo?.email);
  const [username, setUsername] = useState(userInfo?.username);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError('As senhas não coincidem');
    } else if (password.length < 6) {
      setError('Tamanho mínimo de 6 caracteres, para a senha');
    } else {
      setError('');
      try {
        const payload = {
          email,
          username,
          password,
        };

        const response = await apis.updateUser(userInfo.uid, payload);
        console.log(response);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <section>
      <div>
        <h3>Editar</h3>
      </div>

      <div>
        <form className="sign-form-2" onSubmit={handleSubmit}>
          <div>
            <Input
              label="Name"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Input
              label="Password Again"
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
            <div className="mb-20"></div>
            <ButtonIcon
              iconAfter={<MdOutlineSave />}
              type="submit"
              value="Salvar"
              onClick={handleSubmit}
            />
            <div className="mb-20"></div>
          </div>
        </form>
        {error && <Message type="error" value={error} />}
      </div>
    </section>
  );
}

export default UserEdit;
