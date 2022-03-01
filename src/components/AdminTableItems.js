import Button from '../form/Button';
import apiItem from '../api/item';
import { MdClose, MdLoop } from 'react-icons/md';
import { useContext, useState } from 'react';
import Message from './Message';
import { ItemContext } from '../context/ItemContext';

function AdminTableItems({ setUpdateDisabled }) {
  const { items, setItems, setItem } = useContext(ItemContext);

  const [error, setError] = useState('');

  const handleDelete = async (id, type) => {
    setError('');

    try {
      await apiItem.deleteItem(id);
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async (item) => {
    setUpdateDisabled(false);
    setItem(item);
  };

  const convertDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

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
            <th className="w-32">D</th>
            <th className="w-32">U</th>
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

                <td className="w-32">
                  <Button
                    icon
                    value={<MdClose />}
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
                <td className="w-32">
                  <Button
                    icon
                    value={<MdLoop />}
                    onClick={() => handleEdit(item)}
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
