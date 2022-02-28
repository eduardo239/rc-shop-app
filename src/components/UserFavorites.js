import { useContext, useEffect, useState } from 'react';
import apis from '../api';
import { UserContext } from '../context/UserContext';

function UserFavorites() {
  const { userInfo } = useContext(UserContext);

  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (userInfo) {
        console.log(1);
        const response = await apis.getUserFavorites(userInfo.uid);
        if (isMounted) setItems(response.data.data);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <div>
        <h3>Favoritos</h3>
      </div>
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div key={item._id}>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4>No hay favoritos</h4>
        </div>
      )}
      <div></div>
    </section>
  );
}

export default UserFavorites;
