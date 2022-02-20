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
    <section className="flex-center flex-middle">
      <form className="sign-form">
        <h2>Registro</h2>
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
        <Button value="Registrar" onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SignUp;
