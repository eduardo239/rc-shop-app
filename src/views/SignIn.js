import Input from '../form/Input';
import Button from '../form/Button';
import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', email, password);
  };

  return (
    <section>
      <form>
        <Input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button value="Login" onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SignIn;
