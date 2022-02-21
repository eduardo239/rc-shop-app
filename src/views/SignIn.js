import { useContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Input from '../form/Input';
import Button from '../form/Button';
import { isEmpty } from '../helper';

function SignIn() {
  const { setUser, user } = useContext(UserContext);

  const [email, setEmail] = useState('eduardo@gmail.com');
  const [password, setPassword] = useState('123123');

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (!isEmpty(user)) setUser(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
