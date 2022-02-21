import { useState } from 'react';
import Button from '../form/Button';
import Input from '../form/Input';

function UserEdit() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {};

  return (
    <section>
      <div>
        <h3>User Edit</h3>
      </div>

      <div>
        <form>
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
          <Button full value="Registrar" onClick={handleSubmit} />
        </form>
      </div>
    </section>
  );
}

export default UserEdit;
