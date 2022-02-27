import { isEmpty } from '../helper';

function CartTableAddress({ address }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Endereço</th>
          <th>Número</th>
          <th>Complemento</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>País</th>
          <th>CEP</th>
        </tr>
      </thead>
      <tbody>
        {!isEmpty(address) ? (
          <tr>
            <td>{address.street}</td>
            <td>{address.number}</td>
            <td>{address.complement}</td>
            <td>{address.district}</td>
            <td>{address.city}</td>
            <td>{address.state}</td>
            <td>{address.country}</td>
            <td>{address.zipcode}</td>
          </tr>
        ) : (
          <tr>
            <td colSpan="8">Não há endereço cadastrado</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CartTableAddress;
