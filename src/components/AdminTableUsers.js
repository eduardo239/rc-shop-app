import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../form/Button';
import InputRadio from '../form/InputRadio';
import CartTableItems from './CartTableItems';
import CartTableAddress from './CartTableAddress';
import InputCheck from '../form/InputCheck';

function AdminTableUsers({ users }) {
  const handleRemove = (id) => {};

  const handleEdit = (id) => {};

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>UID</th>
            <th>_iID</th>
            <th>Admin</th>
            <th>Remover</th>

            <th>Atualizar</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.uid}</td>
                <td>{user._id}</td>
                <td>
                  <InputCheck disabled checked={user.isAdmin} />
                </td>

                <td>
                  <Button value="del" onClick={handleRemove} />
                </td>
                <td>
                  <Button value="upd" onClick={handleEdit} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminTableUsers;
