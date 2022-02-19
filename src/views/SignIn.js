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
        <Input type="text" onChange={setEmail} value={email} />
        <Input type="password" onChange={setPassword} value={password} />
        <Button value="Login" onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SignIn;
