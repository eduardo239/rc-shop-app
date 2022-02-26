import Button from '../form/Button';
import apis from '../api';
import apiItem from '../api/item';
import { MdClose, MdOutlineSaveAlt } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { ItemContext } from '../context/ItemContext';

function AdminTableItems() {
  const { items, setItems } = useContext(ItemContext);

  const [error, setError] = useState('');

  const handleDelete = async (id, type) => {
    setError('');

    try {
      const res = await apiItem.deleteItem(id);
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async (id, type) => {};

  const convertDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setError('');
      const response = await apiItem.getAllItems();
      if (isMounted) setItems(response.data.data);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      {error && <Message type="error" value={error} />}
      <table>
        <thead>
          <tr>
            <th>Criado em</th>
            <th>_id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Colors</th>
            <th className="w-38">D</th>
            <th className="w-38">U</th>
          </tr>
        </thead>

        <tbody>
          {items.length > 0 &&
            items.map((item) => (
              <tr key={item._id}>
                <td>{convertDate(item.createdAt)}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.colors.length}</td>

                <td className="w-38">
                  <Button
                    icon
                    value={<MdClose />}
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
                <td className="w-38">
                  <Button
                    icon
                    value={<MdOutlineSaveAlt />}
                    onClick={() => handleEdit(item._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminTableItems;
