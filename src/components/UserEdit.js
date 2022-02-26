import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Button from '../form/Button';
import Input from '../form/Input';
import Message from './Message';

function UserEdit() {
  const { user, userInfo } = useContext(UserContext);

  const [email, setEmail] = useState(userInfo.email);
  const [name, setName] = useState(userInfo.username);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  return (
    <section>
      <div>
        <h3>User Edit</h3>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
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
          <Button full value="Salvar" onClick={handleSubmit} />
          <div className="mb-20"></div>
          {error && <Message type="error" value={error} />}
        </form>
      </div>
    </section>
  );
}

export default UserEdit;
