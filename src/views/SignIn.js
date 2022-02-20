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
    <section className="flex-center flex-middle">
      <form className="sign-form">
        <h2>Login</h2>
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

        <Button value="Login" onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SignIn;
