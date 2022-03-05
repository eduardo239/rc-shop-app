import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import apis from '../api';
import Button from '../form/Button';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

function UserFavorites() {
  const { userInfo } = useContext(UserContext);

  const [items, setItems] = useState([]);

  const removeFromFavorites = async (id) => {
    try {
      const response = await apis.removeFromFavorites(userInfo.uid, id);
      if (response.status === 200) {
        setItems(items.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (userInfo) {
        const response = await apis.getUserFavorites(userInfo.uid);
        if (isMounted) setItems(response.data.data);
      }
    })();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <section className="user-section">
      <div>
        <h3>Favoritos</h3>
      </div>
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div key={item._id}>
              <p className="favorite-row flex flex-justify-between">
                <Link to={`/${item._id}`}>{item.name}</Link>
                <Button
                  icon
                  value={<MdClose />}
                  onClick={() => removeFromFavorites(item._id)}
                />
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h5>Não foram encontrados favoritos</h5>
        </div>
      )}
      <div></div>
    </section>
  );
}

export default UserFavorites;
