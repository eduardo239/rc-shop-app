import Input from '../form/Input';
import Button from '../form/Button';
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', email, name, password);
  };

  return (
    <section>
      <form>
        <Input type="password" onChange={setName} value={name} />
        <Input type="text" onChange={setEmail} value={email} />
        <Input type="password" onChange={setPassword} value={password} />
        <Input type="password" onChange={setPassword2} value={password2} />
        <Button value="Registrar" onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SignUp;
