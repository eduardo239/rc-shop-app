import Button from '../form/Button';
import InputCheck from '../form/InputCheck';
import apis from '../api';
import { MdClose, MdLoop } from 'react-icons/md';

function AdminTableUsers({ users }) {
  const handleDelete = async (id) => {
    await apis.deleteUser(id);
  };

  const handleEdit = (id) => {};

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>UID</th>
            <th>_id</th>
            <th>email</th>
            <th className="w-32">A</th>
            <th className="w-32">D</th>
            <th className="w-32">U</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.uid}</td>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td className="w-32">
                  <InputCheck disabled checked={user.isAdmin} />
                </td>

                <td className="w-32">
                  <Button
                    icon
                    value={<MdClose />}
                    onClick={() => handleDelete(user._id)}
                  />
                </td>
                <td className="w-32">
                  <Button icon value={<MdLoop />} onClick={handleEdit} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminTableUsers;
