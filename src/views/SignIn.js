import { useContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from '../helper';
import Input from '../form/Input';
import Message from '../components/Message';
import ButtonIcon from '../form/ButtonIcon';
import { MdVpnKey } from 'react-icons/md';

function SignIn() {
  const { setUser, user } = useContext(UserContext);

  const [email, setEmail] = useState('eduardo@gmail.com');
  const [password, setPassword] = useState('123123');

  const [error, setError] = useState('');

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (!isEmpty(user)) setUser(user);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <section className="flex-justify-center flex">
      <form className="sign-form">
        <h2>
          <span className="primary">L</span>ogin
        </h2>
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

        <ButtonIcon
          iconAfter={<MdVpnKey />}
          value="Login"
          onClick={handleSubmit}
        />

        {error && <Message type="error" value={error} />}
      </form>
    </section>
  );
}

export default SignIn;
