import { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import api from '../api';
import Input from '../form/Input';
import Button from '../form/Button';
import Message from '../components/Message';
import apis from '../api';

function SignUp() {
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState('eduardo@gmail.com');
  const [password, setPassword] = useState('123123');
  const [password2, setPassword2] = useState('123123');
  const [username, setUsername] = useState('e_duardo');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { data } = await apis.getUserByUsername(username);

    if (data.success) {
      setError('Username already exists');
      return;
    }

    if (password !== password2) {
      setError('Passwords do not match');
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const uid = user.uid;

        const payload = {
          uid,
          username,
          email,
          avatar: 'https://loremflickr.com/80/80',
        };

        try {
          await api.createNewUser(payload);
        } catch (err) {
          setError(err.message);
        }
      } catch (err) {
        setError(err.message);
      }
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
        <h2>Registro</h2>
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
        {error && <Message type="error" value={error} />}
      </form>
    </section>
  );
}

export default SignUp;
