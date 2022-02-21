import { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import api from '../api';
import Input from '../form/Input';
import Button from '../form/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function SignUp() {
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState('eduardo@gmail.com');
  const [password, setPassword] = useState('123123');
  const [password2, setPassword2] = useState('123123');
  const [username, setUsername] = useState('e_duardo');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = user.uid;
      console.log(user);

      const payload = {
        uid,
        username,
        email,
        avatar: 'https://loremflickr.com/80/80',
      };
      console.log(payload);

      try {
        await api.createNewUser(payload);
      } catch (err) {
        console.error(err.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      return navigate('/login');
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
      </form>
    </section>
  );
}

export default SignUp;
